var pixi = require("pixi");
var express = require('express') 
var socket_io = require('socket.io') 
var http = require('banyan');
var http = require('http');

var app = express();
var http_server = http.Server(this.app);

var tag_connection = 'connection';
var tag_disconnect = 'disconnect';

function YurtServer(port) {
    this.port = port;
    this.app = express();
    this.http_server = http.Server(this.app);
    this.io = socket_io(this.http_server);
    this.ipToUserMap = {};
    this.ipToSocketMap = {};

    this.start = () => {
        this.app.use(express.static('public'));
        this.http_server.listen(this.port, () => log('Server listening on *:' + this.port));
        this.io.on(tag_connection, socket => this.connection(socket));
    }
    
    this.connection = (socket) => {

        socket.on(tag_disconnect, socket => this.disconnect(socket))
        socket.on(tag_user_data, data => this.user_data(socket, user, data));

        this.disconnect = function(socket) {

        }
    }

    this.user_data = (data) => {

        this.socket.broadcast.emit( );
    }
}

var server = new YurtServer(8000);
server.start();