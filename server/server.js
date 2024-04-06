const dotenv = require("dotenv");
dotenv.config({ path: './.env.local' });

const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('./db/conn');

//read json file
app.use(express.json());

// cookie-parser middleware
app.use(cookieParser()); 
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Rout Link
app.use(require('./route/adminRoute'));
app.use(require('./route/userRoute'));
app.use(require('./route/serviceRoute'));

const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log(`server is runing at port ${PORT}`);
});