const express = require('express');
const restaurant = require('../models/Restaurant');
const app = express();

//4. Read ALL
//http://localhost:8082/restaurants
app.get('/', async (req, res) => {
    try {
        const restaurants = await restaurant.find();
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

});

//5.	Create REST API to return all restaurant details
app.get("/cuisine/:cuisine", async (req, res) => {
    try {
        const restaurants = await restaurant.find({ cuisine: req.params.cuisine });
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//6. to return selectec columns
app.get("/res", async (req, res) => {
    if(Object.keys(req.query).length != 1){
      }else{
        let sortBy = req.query.sortBy
        sortBy = sortBy.toLowerCase()
        const restaurants = await restaurant.find({}).select("name cuisine city restaurant_id").sort({ restaurant_id: sortBy});


        try {
          if(restaurants.length != 0){
            res.json(restaurants);
          }else{
            res.send(JSON.stringify({status:false, message: "No data found"}))
          }
        } catch (err) {
          res.status(500).send(err);
        }
      }


});

// 7. Create REST API to return restaurants details where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn

app.get("/Delicatessen", async (req, res) => {
    try {
        const restaurants = await restaurant
        .find({ cuisine: "Delicatessen", city: { $ne: "Brooklyn" } })
        .select("name cuisine city")
        .sort({ 'name' : 'asc'});
        res.json(restaurants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }


});



module.exports = app