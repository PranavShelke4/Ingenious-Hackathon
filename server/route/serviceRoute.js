const express = require("express");
const app = express.Router();
const cors = require("cors");

require("../db/conn");
const Service = require("../model/serviceSchema");

app.use(cors())

app.post('/services', async (req, res) => {
    try {
      const { title, category, price, shortDescription, fullDescription } = req.body;
      const newService = new Service({
        title,
        category,
        price,
        shortDescription,
        fullDescription,
        // image,
      });
      await newService.save();
      res.status(201).json({ message: 'Service data saved successfully' });
    } catch (error) {
      console.error('Error saving service data:', error);
      res.status(500).json({ error: 'INTERNAL server error' });
    }
});


module.exports = app;