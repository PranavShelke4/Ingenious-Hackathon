const mongoose = require("mongoose");

const DB = process.env.DATABASE || 'mongodb+srv://kaleprashant2004:MongoDB0406@services.irmjsdd.mongodb.net/?retryWrites=true&w=majority&appName=services';

mongoose.connect(DB).then(() => {
    console.log('Connection Succesful');
  }).catch((err) => console.log('Connection failed'));
