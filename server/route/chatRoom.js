var io = require('socket.io')(server)

var chatRoomData = []
var connectedClients = {}

io.on('connection', (client) => {
    console.log("New client connected");

  //Client Sent a message
  client.on("SendMessage", (messageData) => {
    chatRoomData.push(messageData)
    sendUpdatedChatRoomData(client)
  })

  //Client entered The chat Room
  client.on("UserEnteredRoom", (userData) => {
    var enteredRoomMessage = {message: `${userData.username} has entered the chat`, username: "", userID: 0, timeStamp: null}
    chatRoomData.push(enteredRoomMessage)
    sendUpdatedChatRoomData(client)
    connectedClients[client.id] = userData

  })

  //Creating identity for new connected user
  client.on("CreateUserData", () => {
    let userID = uuid();
    let username = uniqueNamesGenerator({ dictionaries: [adjectives, names] });
    var userData = {userID: userID, username: username}
    client.emit("SetUserData", userData)
  })


  //Player Disconnecting from chat room...
  client.on('disconnecting', (data) => {
    console.log("Client disconnecting...");

    if(connectedClients[client.id]){
      var leftRoomMessage = {message: `${connectedClients[client.id].username} has left the chat`, username: "", userID: 0, timeStamp: null}
      chatRoomData.push(leftRoomMessage)
      sendUpdatedChatRoomData(client)
      delete connectedClients[client.id]
    }

  });

  //Clearing Chat room data from server
  client.on('ClearChat', () => {
    chatRoomData=[]
    console.log(chatRoomData)
    sendUpdatedChatRoomData(client)
  })
})

//Sending update chat room data to all connected clients
function sendUpdatedChatRoomData(client){
    client.emit("RetrieveChatRoomData", chatRoomData)
    client.broadcast.emit("RetrieveChatRoomData", chatRoomData)
}