const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    building: {
        type: String,
        trim: true
    },
    street: {
        type: String,
        trim: true
    },
    zipcode: {
        type: String,
        trim: true
    }
});

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Restaurant Name"],
        trim: true
    },
    city: {
        type: String,
        required: [true, "Please Enter City"],
        trim: true
    },
    cuisine: {
        type: String,
        required: [true, "Please Enter Cuisine"],
        trim: true
    },
    restaurant_id: {
        type: String,
        required: [true, "Please Enter Restaurant ID"],
        trim: true
    },
    address: addressSchema // Provide a key for addressSchema
});


const Restaurant = mongoose.model("restaurant", RestaurantSchema);
module.exports = Restaurant;