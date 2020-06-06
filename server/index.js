const express = require('express');
const PORT = process.env.PORT || 4100;
const socketio = require('socket.io');
const http = require('http');
const app = express();
const router = require('./router');
const server = http.createServer(app);
const io = socketio(server);
io.on('connection', (socket) => {
  console.log('we have new connection');
  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
  });
  socket.on('disconnect', () => {
    console.log('user had left!!!');
  });
});
app.use(router);
server.listen(PORT, () => console.log(`server has started on port ${PORT}`));
