const dotenv = require("dotenv");
dotenv.config({ path: "./.env.local" });
const cors = require("cors");

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

require("./db/conn");

// For Socket.io
var uuid = require("uuid-random");
var bodyParser = require("body-parser");

//read json file
app.use(express.json());

// cookie-parser middleware
app.use(cookieParser());

// cors middleware
app.use(cors());

// body-parser middleware
app.use(bodyParser.json());

// Rout Link
app.use(require("./route/adminRoute"));
app.use(require("./route/userRoute"));
app.use(require("./route/serviceRoute"));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is runing at port ${PORT}`);
});
