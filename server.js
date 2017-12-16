const pixi = require("pixi");
const express = require('express');
const http = require('http');
const compression = require('compression');
const socket_io = require('socket.io') 
const bunyan = require('bunyan');
const public_ip = require('public-ip');
const config = require('./config.json');

var logger = bunyan.createLogger({name: "hurtinayurt"});

const tag_connection = 'connection';
const tag_disconnect = 'disconnect';
const tag_user_data = 'user_data';

var app = express();
var http_server = http.createServer(app); 
var log = function(req, res, next) {
    logger.info("Request from " + req);
    next();
}
app.use(log);
app.use(compression());
app.use(express.static('public'));
app.use(express.static('node_modules'));

var io = socket_io(http_server);

function start() {
    http_server.listen(config.port);
    io.on(tag_connection, socket => connection(socket))
}

function connection(socket) {
    let socket_ip = socket.request.connection.remoteAddress;
    let interval;

    logger.info("Socket connected: "+socket_ip);

    this.user_data = function(user_data){
        logger.info("Recieved update for player: "+socket_ip);
        socket.broadcast.emit("update", user_data);
    }    
    this.disconnect = function() {
        logger.info("Socket disconnected: "+socket_ip);
        clearInterval(interval);
    }
    this.request_update = function(){
        logger.info("Requesting update for player: "+socket_ip);
        socket.emit("update_request");
    }

    socket.on("update", user_data => this.user_data(user_data));
    socket.on("disconnect", () => this.disconnect())

    let start_data = {
        id: "you dick",
        x:0,
        y:0
    }
    socket.emit("start_game", start_data); 
    interval = setInterval(request_update, 1000);
}

function user_data(data) {
    this.socket.broadcast.emit("data",data);
}

start();