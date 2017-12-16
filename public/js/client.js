

function YurtClient() {
    this.setup = function (socket, game) {
        socket.removeListener(tag_updated_game_data);
        
        this.stage = new PIXI.Container();
        this.renderer = new PIXI.WebGLRenderer(this.size * game.width, this.size * game.height, { antialias: false, roundPixels: true });
        this.gamepanel = document.getElementById("game-panel");
        this.gamepanel.appendChild(this.renderer.view);
        this.renderer.autoResize = true;
    }

    var socket = io();
    // socket.on(tag_chat, message => this.displayMessage(message));
    // socket.on(tag_user_script, () => this.displayMessage("Script uploaded!"));
    socket.on(tag_initial_game_data, game => this.setup(socket, game));
}

var client = YurtClient();