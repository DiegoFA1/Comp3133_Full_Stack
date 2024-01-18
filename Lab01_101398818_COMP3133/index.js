const fs = require('fs');
const csv = require('csv-parser');

console.log("Deleting old file canada.txt...");
fs.unlink('canada.txt', (err) => {
    if (err) {
        return 
    }
    console.log("Old file deleted successfully!");
});

console.log("Deleting old file usa.txt...");
fs.unlink('usa.txt', (err) => {
    if (err) {
        return 
    }
    console.log("Old file deleted successfully!");
});

fs.createReadStream('input_countries.csv')
.pipe(csv())
.on('data', (row) => {
    if (row.country == "Canada") {
        fs.appendFile('canada.txt', `country,year,population\n${row.country},${row.year},${row.population}\n`, (err) => {
            if (err) {
                return console.log(err);
            }
        });
    } else if (row.country == "United States") {
        fs.appendFile('usa.txt', `country,year,population\n${row.country},${row.year},${row.population}\n`, (err) => {
            if (err) {
                return console.log(err);
            }
        });
    }
})
.on('end', () => {
    console.log('Processing complete.');
});
