const pixi = require("pixi");
const express = require('express') 
const socket_io = require('socket.io') 
const bunyan = require('bunyan');
const public_ip = require('public-ip');

var logger = bunyan.createLogger({name: "hurtinayurt"});
var tag_connection = 'connection';
var tag_disconnect = 'disconnect';
var port = 8000;

var app = express();
var log = function(req, res, next) {
    logger.info("Request from " + req);
    next();
}
app.use(log);
app.use(compression());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

var http_server = http.Server(this.app);
var io = socket_io(this.http_server);
var ipToUserMap = {};
var ipToSocketMap = {};

function start() {
    
    app.listen(80, function() {

        public_ip.v4().then(ip => {
            logger.info("Hurt in a Yurt running at http://"+ip+":"+port+"/");
        });
    });
}

function connection(socket) {
    socket.on(tag_disconnect, socket => this.disconnect(socket))
    socket.on(tag_user_data, data => this.user_data(socket, user, data));
    this.disconnect = function(socket) {
    }
}

function user_data(data) {
    this.socket.broadcast.emit( );
}

server.start();