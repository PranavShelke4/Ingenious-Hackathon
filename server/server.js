const dotenv = require("dotenv");
dotenv.config({ path: './.env' });
const cors = require("cors");

const express = require("express");
const app = express();

// For Socket.io
var uuid = require('uuid-random');
var bodyParser = require("body-parser");

// const router = require("./route/send-email");
const serviceRoute = require("./route/serviceRoute");

require('./db/conn');

// -------------------------------------------------------------
// Used for Unique Names of Clients connecting in the CHAT-ROOM
// -------------------------------------------------------------
// const { uniqueNamesGenerator, names } = require('unique-names-generator');


// cookie-parser middleware
// app.use(cookieParser());
app.use(express.json()); 
app.use(cors());
app.use(bodyParser.json());


// Rout Link
// -------------------------------------------------------------
// Use this function for CHAT-ROOM
// -------------------------------------------------------------
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.use(require('./route/adminRoute'));
// app.use(serviceRoute);
// app.use(router);

const PORT = process.env.PORT;


var server = app.listen(PORT, function() {
  var port = server.address().port;
  console.log('Listening at http://%s:%s','localhost', port);
});


// ----------------------------------------------------------------
// FOR CHAT-ROOM Socket, Input/Output....
// ----------------------------------------------------------------

// var io = require('socket.io')(server)

// var chatRoomData = []
// var connectedClients = {}

// io.on('connection', (client) => {
//     console.log("New client connected");

//   //Client Sent a message
//   client.on("SendMessage", (messageData) => {
//     chatRoomData.push(messageData)
//     sendUpdatedChatRoomData(client)
//   })

//   //Client entered The chat Room
//   client.on("UserEnteredRoom", (userData) => {
//     var enteredRoomMessage = {message: `${userData.username} has entered the chat`, username: "", userID: 0, timeStamp: null}
//     chatRoomData.push(enteredRoomMessage)
//     sendUpdatedChatRoomData(client)
//     connectedClients[client.id] = userData

//   })

//   //Creating identity for new connected user
//   client.on("CreateUserData", () => {
//     let userID = uuid();
//     let userName = uniqueNamesGenerator({ dictionaries: [names] });
//     var userData = {userID: userID, username: userName}
//     client.emit("SetUserData", userData)
//   })


//   //Player Disconnecting from chat room...
//   client.on('disconnecting', (data) => {
//     console.log("Client disconnecting...");

//     if(connectedClients[client.id]){
//       var leftRoomMessage = {message: `${connectedClients[client.id].username} has left the chat`, username: "", userID: 0, timeStamp: null}
//       chatRoomData.push(leftRoomMessage)
//       sendUpdatedChatRoomData(client)
//       delete connectedClients[client.id]
//     }

//   });

//   //Clearing Chat room data from server
//   client.on('ClearChat', () => {
//     chatRoomData=[]
//     console.log(chatRoomData)
//     sendUpdatedChatRoomData(client)
//   })
// })

// //Sending update chat room data to all connected clients
// function sendUpdatedChatRoomData(client){
//     client.emit("RetrieveChatRoomData", chatRoomData)
//     client.broadcast.emit("RetrieveChatRoomData", chatRoomData)
// }