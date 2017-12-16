//Define any variables that are used in more than one function
let cat, state;

function setup() {

  //Create the `cat` sprite 
  cat = new Sprite(resources["img/cat.png"].texture);
  cat.y = 96; 
  cat.vx = 0;
  cat.vy = 0;
  app.stage.addChild(cat);

  let left = keyboard(37);
  let up = keyboard(38);
  let right = keyboard(39);
  let down = keyboard(40);

  left.press = () => {
    cat.vx = -5;
    cat.vy = 0;
  };
  left.release = () => {
    if (!right.isDown && cat.vy === 0) {
      cat.vx = 0;
    }
  };

  up.press = () => {
    cat.vy = -5;
    cat.vx = 0;
  };
  up.release = () => {
    if (!down.isDown && cat.vx === 0) {
      cat.vy = 0;
    }
  };

  right.press = () => {
    cat.vx = 5;
    cat.vy = 0;
  };
  right.release = () => {
    if (!left.isDown && cat.vy === 0) {
      cat.vx = 0;
    }
  };

  down.press = () => {
    cat.vy = 5;
    cat.vx = 0;
  };
  down.release = () => {
    if (!up.isDown && cat.vx === 0) {
      cat.vy = 0;
    }
  };

  state = play;
 
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){
  state(delta);
}

function play(delta) {
  cat.x += cat.vx;
  cat.y += cat.vy
}

setup();