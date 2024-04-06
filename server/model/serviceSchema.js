const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    category:{
        type: String,
    },
    price:{
        type: Number,
    },
    shortDescription:{
        type: String,
    },
    fullDescription:{
        type: String,
    },
    image:{
       type:String,
    },
});


const Service = mongoose.model('SERVICE', serviceSchema);
    title: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: Number,
    },
    shortDescription: {
        type: String,
    },
    fullDescription: {
        type: String,
    },
    image: {
        type: String, 
    },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
