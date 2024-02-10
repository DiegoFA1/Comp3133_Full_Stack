const userModel = require('../models/Users');
const express = require('express');
const app = express();



// Read All users
app.get('/users', async (req, res) => {
    const users = await userModel.find({})

    try {
      res.status(200).send(users);
    } catch (err) {
      console.log(err)
      res.status(500).send(err);
    }
  });

// Read user by ID
app.get('/users/:id', async (req, res) => {
    const user = await userModel.findById(req.params.id)
    try {
      res.status(200).send(user);
    } catch (err) {
      res.status
        (500).send(err);
    }
});

// Create User
app.post('/users', async (req, res) => {
    const user = new userModel(req.body)
    try {
      await user.save()
      res.status(201).send(user)
    } catch (err) {
      res.status(500).send(err)
    }
  });

module.exports = app
