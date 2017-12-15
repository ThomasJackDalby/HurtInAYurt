import "package:play_phaser/phaser.dart";

main() {
  Game game = new Game(800, 480, WEBGL, '', new basic_01_load_an_image());
}

class basic_01_load_an_image extends State {

  Text text;
  Sprite image;

  preload() {
    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('car', 'assets/sprites/car.jpg');

  }

  create() {
    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen

    image = game.add.sprite(game.world.centerX, game.world.centerY, 'car');
    
    //  Moves the image anchor to the middle, so it centers inside the game properly
    image.anchor.set(0.5);

  }

}