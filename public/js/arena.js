class arena {
    constructor(_width, _height) {
        this.playerPrincipal;
        this.haveNewSocket = false;
<<<<<<< HEAD
        this.players = {};
=======
        this.players = [];
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
        this.bullets = [];
        this.name;
        this.fruits = [];

        this.size = {
            width: _width,
            height: _height
        }
        this.buffer;
        this.oldTime = 0;
        this.newTime = millis();
        this.deltaTime;

        const center = createVector(0, 0);

        this.quadFruits = new quadFood(center, _width * 2, _height * 2);

    }
    setName(name) {
        this.name = name;
    }
<<<<<<< HEAD
    setPlayer(playerp) {
      
        this.playerPrincipal = new player(playerp.x, playerp.y, playerp.id);
=======
    randomFruit() {
        return new food(random(-this.size.width, this.size.width),
            random(-this.size.height, this.size.height))
    }
    setPlayer(player) {

        this.playerPrincipal = player;

>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
    }
    getDelta() {
        return this.deltaTime / 1000;
    }
<<<<<<< HEAD
    setFruits(n) {
        socket.emit('createFruits', n);
    }
    addPlayer(player){
        this.players[player.id] = (new protPlayer(player.name,
                    player.x,
                    player.y,
                    player.id,
                    player.size));
    }
    createPlayers(players) {
        for (let key in players) {
            console.log(players, players[key].id);
           // if (players[key].id != socket.id) {
                this.players[players[key].id] = (new protPlayer(players[key].name,
                    players[key].x,
                    players[key].y,
                    players[key].id,
                    players[key].size,
                    players[key].mousex,
                    players[key].mousey))
          //  } else {
               // this.setPlayer(new player(players[key].x, players[key].y, players[key].id));
            //}
=======
    setRandomFruit() {
        this.fruits.push(new food(random(-this.size.width, this.size.width),
            random(-this.size.height, this.size.height)));
    }
    setFruits(n) {
        /*
        for (var i = 0; i < n; i++) {
            this.setRandomFruit();
        }
        */
        socket.emit('createFruits', n);
    }
    createPlayers(protPlayers) {
        for (let p of protPlayers) {

            if (p.id != socket.id) {
                this.players.push(new protPlayer(p.name, p.x, p.x, p.id, p.size, p.mousex, p.mousey))
            } else {
                this.setPlayer(new player(p.x, p.y, p.id));
            }
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46

        }
        this.haveNewSocket = true;
        this.drawPlayers();
    }
    getPlayer() {
        return this.playerPrincipal;
    }
<<<<<<< HEAD
    drawFakeBullets() {
        for (let p of this.playerPrincipal.bullets) {
            fill(0, 0, 255);
            circle(p.x, p.y, 20);
        }
    }
=======

>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
    drawBullets() {
        for (let p of this.bullets) {
            fill(0, 0, 255);
            circle(p.x, p.y, 20);
        }
    }
<<<<<<< HEAD
    Collide_AABB_Circle() {

    }
=======
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
    update() {
        this.deltaTime = this.newTime - this.oldTime;
        this.oldTime = this.newTime;
        this.newTime = millis();

        socket.on('spawnBullets', (arrayBullets) => {
            for (let i = 0; i < arrayBullets.length; i++) {
                if (this.bullets[i] == undefined) {
                    let pos = createVector(arrayBullets[i].x, arrayBullets[i].y)
                    this.bullets[i] = new createVector(pos.x, pos.y);
                } else {
                    this.bullets[i].x = arrayBullets[i].x;
                    this.bullets[i].y = arrayBullets[i].y;
                }
            }
            for (let i = arrayBullets.length; i < this.bullets.length; i++) {
                this.bullets.splice(i, 1);
                this.bullets.splice(i, 1);
                i--;
            }

        });
<<<<<<< HEAD

=======
        //...
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46

        socket.on('spawnFruits', function (arrayFruits) {
            for (let i = 0; i < arrayFruits.length; i++) {
                if (world.fruits[i] == undefined) {
                    //let pos = createVector(arrayFruits[i].x, arrayBullets[i].y)
                    let _fruit = new protFruit(arrayFruits[i].pos.x, arrayFruits[i].pos.y,
                        arrayFruits[i].size,
<<<<<<< HEAD
                        arrayFruits[i].rotate, 100, 0);
                    world.fruits[i] = _fruit;
                } else {
                    world.fruits[i].x = lerp(world.fruits[i].x, arrayFruits[i].x, 0.1);
                    world.fruits[i].y = lerp(world.fruits[i].y, arrayFruits[i].y, 0.1);
=======
                        arrayFruits[i].rotate, arrayFruits[i].life, arrayFruits[i].debug);
                    world.fruits[i] = _fruit;
                } else {
                    world.fruits[i].x = arrayFruits[i].x;
                    world.fruits[i].y = arrayFruits[i].y;
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
                }
            }
            for (let i = arrayFruits.length; i < world.fruits.length; i++) {
                world.fruits.splice(i, 1);
                world.fruits.splice(i, 1);
                i--;
            }
        });

<<<<<<< HEAD
        this.drawBullets();
        this.drawFruits();

=======

        this.drawBullets();
        this.drawFruits();
        /*
        const center = createVector(0, 0);
        this.quadFruits = new quadFood(center, this.size.width * 2, this.size.height * 2);


        let i = 0
        let j = 0;

        for (let fruit of this.fruits) {
            if (fruit.state == foodState.DEAD) {
                this.fruits.splice(i, 1);
                continue;
            }
            fruit.update();
            fruit.display();
            this.collideAndPush(0.05, this.playerPrincipal, fruit, 1, 0);
            j = 0;
            for (let fruit2 of this.fruits) {
                this.collideAndPush(0.1, fruit, fruit2, i, j);
                j++;
            }
            const quick = 1.5;
            let force = createVector(0, 0);
            if (fruit.pos.x >= this.size.width - 20 || fruit.pos.x <= -this.size.width + 20) {
                if (fruit.pos.x < 0) {
                    force = createVector(1, 0);
                    fruit.aplyForce(force, quick);
                } else {
                    force = createVector(-1, 0);
                    fruit.aplyForce(force, quick);
                }
            }
            if (fruit.pos.y > this.size.height - 20 || fruit.pos.y <= -this.size.height + 20) {
                if (fruit.pos.y < 0) {
                    force = createVector(0, 1);
                    fruit.aplyForce(force, quick);
                } else {
                    force = createVector(0, -1);
                    fruit.aplyForce(force, quick);
                }
            }
            // fruit.aplyForce(force, quick);
            if (fruit.state != foodState.DYING) {
                this.quadFruits.insert(fruit)
            }

            i++;
        }

        this.playerPrincipal.update(camera.mouseX, camera.mouseY);
        this.playerPrincipal.display();
        this.collideBullets();

        const quad = this.quadFruits.getQuadbyPos(camera.mouseX, camera.mouseY);
        this.quadFruits.display();
        */
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
        this.playerPrincipal.update(camera.mouseX, camera.mouseY);
        this.playerPrincipal.display();
        this.drawPlayers();
    }
    drawFruits() {
        for (let f of this.fruits) {
            push()

            translate(f.x, f.y);
            rotate(f.angle * PI / 180)
<<<<<<< HEAD
            strokeWeight(2);
            stroke(0);


            fill(50, 200, 50);


=======
            stroke(0);

            if (f.debug) {
                switch (f.debug) {
                    case 0:
                        fill(50, 200, 50);
                        break;
                    case 1:
                        fill(200, 200, 50);
                        break;
                    case 2:
                        fill(200, 0, 200);
                        break;
                }
            } else {

                fill(50, 200, 50);

            }
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46

            rect(0, 0, f.size, f.size);
            pop()

        }
    }

    drawPlayers() {

<<<<<<< HEAD
        for (let key in this.players) {
            push()
            this.players[key].display();
=======
        for (let p of this.players) {
            push()
            p.display();
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
            pop()

        }
    }
    collideAndPush(force, a, b, i, j) {
        const dist = b.pos.dist(a.pos);
        if (dist < b.size / 2 + a.size / 2 && i != j) {
            const angle = a.pos.angleBetween(b.pos);
            const mov = b.pos.copy().sub(a.pos);
            if (a.type != 'fruit') {
                a.takeDamage(10);
                b.life -= 10;

            }
            if (debugMode) {
                strokeWeight(10)
                stroke(0)
                line(b.pos.x, b.pos.y, b.pos.x + mov.x, b.pos.y + mov.y);
            }
            b.aplyForce(mov, dist * force)
        }
    }
    collideBullets() {
        for (let bullet of this.playerPrincipal.bullets) {
            const quad = world.quadFruits.getQuadbyPos(bullet.pos.x, bullet.pos.y);
            if (bullet.checkLife()) {
                for (let food of quad.fruits) {
                    if (bullet.pos.dist(food.pos) < food.size) {
                        if (food.type == 'fruit') {
                            const dir = bullet.dir.copy().mult(world.getDelta());
                            food.life -= bullet.damage;
                            food.aplyMovement(dir, 2)
                            food.aplyForce(dir, 0.5)
                            food.hit.startTimer();
                            if (food.dir.x > food.dir.y) {
                                food.dirAng = food.dir.x * random(10);
                            } else {
                                food.dirAng = food.dir.y * random(10);
                            }
                        } else {

                        }

                        bullet.life = 0;
                    }
                    if (debugMode) {
                        fill(0);
                        circle(food.pos.x, food.pos.y, 40);
                    }

                }
            }
        }
    }
    display() {
        fill(255, 255, 255);
        stroke(0);
        rect(0, 0, this.size.width * 2, this.size.height * 2)
<<<<<<< HEAD
        const scale = 16;
        const offset = this.size.width / scale;
        strokeWeight(10);
        stroke(200, 200, 220, 200);
        for (let i = -this.size.width; i <= this.size.width; i += offset) {
            if (i >= this.playerPrincipal.camera.x - width && i <= this.playerPrincipal.camera.x + width) {
                line(i, -this.size.height, i, this.size.height);
            }
        }
        for (let i = -this.size.height; i <= this.size.height; i += offset) {
            if (i >= this.playerPrincipal.camera.y - height && i <= this.playerPrincipal.camera.y + height) {
                line(-this.size.width, i, this.size.width, i);
            }
        }
=======
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
        noStroke();
    }

}


/*
update() {
        this.deltaTime = this.newTime - this.oldTime;
        this.oldTime = this.newTime;
        this.newTime = millis();

        const center = createVector(0, 0);
        this.quadFruits = new quadFood(center, this.size.width * 2, this.size.height * 2);

        let i = 0
        let j = 0;
        for (let fruit of this.fruits) {
            if (fruit.state == foodState.DEAD) {
                this.fruits.splice(i, 1);
                continue;
            }
            fruit.update();
            fruit.display();
            this.collideAndPush(0.05, this.playerPrincipal, fruit, 1, 0);
            j = 0;
            for (let fruit2 of this.fruits) {
                this.collideAndPush(0.1, fruit, fruit2, i, j);
                j++;
            }
            const quick = 1.5;
            let force = createVector(0, 0);
            if (fruit.pos.x >= this.size.width - 20 || fruit.pos.x <= -this.size.width + 20) {
                if (fruit.pos.x < 0) {
                    force = createVector(1,0);
                    fruit.aplyForce(force, quick);
                } else {
                    force = createVector(-1,0);
                    fruit.aplyForce(force, quick);
                }
            }
            if (fruit.pos.y > this.size.height - 20 || fruit.pos.y <= -this.size.height + 20) {
                if (fruit.pos.y < 0) {
                    force = createVector(0,1);
                    fruit.aplyForce(force, quick);
                } else {
                    force = createVector(0,-1);
                    fruit.aplyForce(force, quick);
                }
            }
           // fruit.aplyForce(force, quick);
            if (fruit.state != foodState.DYING) {
                this.quadFruits.insert(fruit)
            }

            i++;
        }
        this.playerPrincipal.update(camera.mouseX, camera.mouseY);
        this.playerPrincipal.display();
        this.collideBullets();

        const quad = this.quadFruits.getQuadbyPos(camera.mouseX, camera.mouseY);
        this.quadFruits.display();
      
        this.drawPlayers();
    }



*/