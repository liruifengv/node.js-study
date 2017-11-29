var socketio = require('socket.io')
var io
var guestNumber = 1
var nickNames = {}
var nameUsed = []
var currentRoom = {}

exports.listen = function(server) {
  io =  socketio.listen(server)
  io.serveClient('log level', 1)
  io.sockets.on('connection',function(socket) {
    guestNumber = assignGuestName(socket,guestNumber,nickNames,nameUsed)
    joinRoom(socket,'Lobby')
    handleMessageBroadcasting(socket,nickNames)
    handleNameChangeAttempts(socket,nickNames,nameUsed)
    handleRoomJoining(socket)
    socket.on('rooms',function(){
      socket.emit('rooms',io.sockets.manager.rooms)
    })
    handleClientDisconnection(socket,nickNames,nameUsed)
  })
}
// 分配用户昵称
function assignGuestName(socket,guestNumber,nickNames,nameUsed) {
  var name = 'Guest' + guestNumber
  nickNames[socket.id] = name
  socket.emit('nameResult', {
    success: true,
    name: name
  })
  nameUsed.push(name)
  return guestNumber + 1
}
// 进入聊天室
function joinRoom(socket,room) {
  socket.join(room)
  currentRoom[socket.id] = room
  socket.emit('joinResult', {room:room})
  socket.broadcast.to(room).emit('message', {
    text: nickNames[socket.id] + 'has joined ' + room + '.'
  })
  
}