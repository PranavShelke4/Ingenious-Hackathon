const express = require("express");
const router = express.Router();
const cors = require("cors");

require("../db/conn");
const Service = require("../model/serviceSchema");

router.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// API Endpoint to Send the services-data to MongDB 
router.post('/add-services', async (req, res) => {
  try {
    const { name, category, price, shortDescription, fullDescription, image} = req.body;
    
    const newService = new Service({
      name,
const multer = require("multer"); // For handling file uploads
const path = require("path");
const Service = require("../model/serviceSchema");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads")); // Define the destination folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Define the file name
  },
});

// Multer file filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Please upload only images."), false);
  }
};

// Initialize multer with defined storage and file filter
const upload = multer({ storage: storage, fileFilter: fileFilter });

// Add a new service
router.post("/services", upload.single("image"), async (req, res) => {
  try {
    const { title, category, price, shortDescription, fullDescription } =
      req.body;
    const image = req.file.path; // Get the path of the uploaded image
    const newService = new Service({
      title,
      category,
      price,
      shortDescription,
      fullDescription,
      image
    });
    console.log(newService);
    await newService.save();
    res.status(201).json({ message: 'Service data saved successfully' });
  } catch (error) {
    console.error('Error saving service data:', error);
    res.status(500).json({ error: 'INTERNAL server error' });
  }
});

// API endpoint to retrieve services
router.get('/get-services', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
      image,
    });
    await newService.save();
    res.status(201).json({ message: "Service data saved successfully" });
  } catch (error) {
    console.error("Error saving service data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all services
router.get("/getservices", async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    console.error("Error fetching services:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
