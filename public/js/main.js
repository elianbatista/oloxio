let world;
let debugMode = false;
let flag;
const playerState = {
  STOP: 0,
  WALK: 1,
  RUN: 2,
  SHOT: 3,
  DAMAGE: 4,
  DYING: 5,
  DEAD: 6,
}
const foodState = {
  WALK: 0,
  DAMAGE: 1,
  DYING: 3,
  DEAD: 4,
}
socket.on('criarSala', function (alreadyExists, name, width, height) {
    if (!alreadyExists) {
        world = new arena(width, height);
        world.setName(name);

    
    } else {
        //quando n tem ngm na sala cria as frutas

        world = new arena(width, height);
        world.setName(name);

        world.setFruits(30);
    }

    flag = true;
});



function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);

    randomSeed(0);
    flag = false;
    textFont('Dosis');

}

function draw() {
    //frameRate(2)
    //resizeCanvas(windowWidth, windowHeight);
    if (flag) {
     
        if (world.playerPrincipal) {
          background(170, 0, 255);

          world.display();
          world.update();


          camera.off()
        }

    }
}