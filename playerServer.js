<<<<<<< HEAD
const vec2d = require('./mathServer.js');

function randomInterval(min, max) {
    return Math.random() * (max - min) + min;
}

function lerpN(a, b, n) {
    //return (1 - n) * a + n * b;
    return a + (b - a) * n;
}
const State = {
    STOP: 0,
    WALK: 1,
    RUN: 2,
    SHOT: 3,
    DAMAGE: 4,
    DYING: 5,
    DEAD: 6,
}
let playerChar = function (bulletDamage,
    bulletLife, bulletAcurac, bulletSpeed, bulletSize, bulletRecharge) {
    this.damage = bulletDamage || 10;
    this.life = bulletLife || 5000;
    this.Acurac = bulletAcurac || 0.5;
    this.speed = bulletSpeed || 150;
    this.size = bulletSize || 20;
    this.recharge = bulletRecharge || 250;
}
const playerState = {
    'hunter': {
        details: new playerChar(25, 1000, 1.0, 600, 10, 400)
    },
    'battleloid': {
        details: new playerChar(5, 5000, 0.2, 150, 25, 100)
    }
}
class player {
    constructor(name, id, x, y, size, speed, char) {
        this.id = id;
        this.name = name;

        this.pos = new vec2d(x, y);
        this.newPos = new vec2d(x, y);
        this.target = new vec2d(x, y);
        this.dir = new vec2d(0, 0);

        this.speed = speed;
        this.currentSpeed = 0;

        this.state = State.STOP;
        this.specialization = playerState[char].details;

        this.size = size;
        this.mousex = 0;
        this.mousey = 0;
    }

    lookAt() {

    }
    sendUpdate() {

    }
    update(delta, io) {
        //Se o player deu uma andada boa mandar a informação
        if(this.newPos.sqDist(this.pos) >= 100){
            this.pos.clone(this.newPos);
            
            io.broadcast.emit('updatePlayerPosition', );
        }
        //Se o player está andando
        if (this.state == State.WALK) {
            //Se a distancia até o destino for grande
            if (this.newPos.sqDist(this.target) >= 100) {
                //Atualiza a direção / velocidade
                this.seekTarget()


            //Se NAO parar o player 
            } else {
                this.state = State.STOP;
            }
        } else if (this.state == State.STOP) {
            //Parar o player
            var zero = new vec2d(0, 0);
            this.dir.lerp(zero, 0.3);
        }

        this.aplyForce(this.dir, delta);
    }

    seekTarget() {
        this.dir = pos.lookAt(this.target.x, this.target.y);

        this.currentSpeed = lerpN(this.currentSpeed, this.speed, 0.02);
        this.dir.mult(this.currentSpeed);
    }
    aplyForce(force, delta) {
        force.mult(delta);
        this.newPos.add(force)
    }


}
module.exports = player;
=======

module.exports =  function (name, id, x, y, size) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.size = size;
    this.mousex = 0;
    this.mousey = 0;
    this.id = id;
};
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
