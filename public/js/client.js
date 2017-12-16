const players = {}
let player = {
    x: 0,
    y: 0,
};

const socket = io();

// socket.on(tag_chat, message => this.displayMessage(message));
// socket.on(tag_user_script, () => this.displayMessage("Script uploaded!"));
socket.on("start_game", game_data => connection(game_data));

function connection(start_data) {
    console.log("hello");
    player.id = start_data.id;
    player.x = start_data.x;
    player.y = start_data.y;

    socket.on("update_request", () => send_update())
    
    socket.on("update", user_data => get_update(user_data))
    // this.stage = new PIXI.Container();
    // this.renderer = new PIXI.WebGLRenderer(this.size * game_data.width, this.size * game_data.height, { antialias: false, roundPixels: true });
    // this.gamepanel = document.getElementById("game-panel");
    // this.gamepanel.appendChild(this.renderer.view);
    // this.renderer.autoResize = true;
}

function get_update(user_data){
    console.log("Received data from: "+user_data.id);
    let p = players[user_data.id];
}

function send_update() {
    console.log("Sending update to server:");
    let data = {
        id:socket.id,
        x:player.x,
        y:player.y
    };
    socket.emit("update", data);
}