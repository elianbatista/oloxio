var express = require('express'),
       http = require('http');


var app = express();
var server = http.createServer(app);
//Deixar do jeito q tava antes do servidor
// colisão bala-fruta / bala-player / fruta-fruta 1.0
//Criar sistemas de pontos/level/xp
//ScoreBoard e update
//Classes
//


const mathServer = require('./mathServer.js');
const clockServer = require('./clockServer.js');
const playerServer = require('./playerServer.js');
const bulletServer = require('./bulletServer.js');
const fruitServer = require('./fruitServer.js');
const arenaServer = require('./arenaServer.js');



<<<<<<< HEAD
=======

>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
var io = require('socket.io').listen(server);


const path = require('path');
const port = process.env.PORT || 3000;
//localStorage.debug = '*';
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


<<<<<<< HEAD
let arenaInstance = new arenaServer(1600, 1600);


io.on('connect', (socket) => {
       socket.on('createArenaRequest',(playerName, playerSpecialization)=>{
              socket.emit('inicializarClientRequest',(arenaInstance.create,
                                                      arenaInstance.width,
                                                      arenaInstance.height))
              arenaInstance.create = false;

              arenaInstance.playersCount++;

              const newSocket = new playerServer(name, socket.id, 0, 0, 200, 40, specs);

              io.emit('newPlayerRequest',name, socket.id, 0, 0, 40);
              
              if(arenaInstance.playersCount >1){
                     //MUDAR 
                     //(posição, nome, idFalso)
                     socket.emit('createClientPlayerList', arenaInstance.players);
                     
              }
     
              arenaInstance.players[socket.id] = (newSocket);
       })
       socket.on('criarArena', function (name, specs) {
              arenaInstance.playersCount++;   
              socket.emit('criarSala', arenaInstance.create,
                     name,
                     arenaInstance.width,
                     arenaInstance.height);
              //Emitir o player criado
              //Caso a sala ja tenha playerPrincipal ela adiciona mais um player;
         
              //Caso não tenha ela adiciona como player principal;
              //E manda os players restantes
         
           
              const newSocket = new playerServer(name, socket.id, 0, 0, 200, 40, specs);
              io.emit('addPlayer', newSocket);
         
         
              if(arenaInstance.playersCount >1){
                     console.log(arenaInstance.players, socket.id);
                     socket.emit('addOtherPlayers', arenaInstance.players);
                     
              }
     
              arenaInstance.players[socket.id] = (newSocket);
              
              
=======

let arenaInstance = new arenaServer(400, 400);

let bullet = new bulletServer();
let player = new playerServer('douglas', '123', 0, 0, 40);
let _fruit = new fruitServer(0,0);

//this.pos.x,this.pos.y,this.size, this.mousex, this.mousey



io.on('connect', (socket) => {

       socket.on('conectei', function (name) {
              socket.emit('criarSala', arenaInstance.havePlayers(),
                     name,
                     arenaInstance.width,
                     arenaInstance.height)

              const newSocket = new playerServer(name, socket.id, 0, 0, 40);
              arenaInstance.players.push(newSocket);

              socket.broadcast.emit('newSocket', newSocket);
              socket.emit('mensagem', arenaInstance.players);
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
       });

       socket.on('disconnect', function () {
              socket.broadcast.emit('disconectPlayer', socket.id);
<<<<<<< HEAD
              delete arenaInstance.players[socket.id];
       });
       socket.on('playerStartMovement', (id, mousex, mousey)=>{

       })
       socket.on('update', (id, playerX, playerY, size, mousex, mousey) => {

              if(arenaInstance.playersCount > 0){
                     
                     arenaInstance.players[id].x = playerX;
                     arenaInstance.players[id].y = playerY;
                     arenaInstance.players[id].size = size;
                     arenaInstance.players[id].mousex = mousex;
                     arenaInstance.players[id].mousey = mousey;

                     socket.volatile.broadcast.emit('updatePositions', id,
                            playerX, playerY,
                            size,
                            mousex, mousey);
              }
              
       });


       socket.on('newBullet', function (x, y, angle, id) {
            
              if(arenaInstance.playersCount > 0 ){
                     let prot = new bulletServer(x, y, angle,
                            arenaInstance.players[id].specialization.speed,
                            arenaInstance.players[id].specialization.life,
                            arenaInstance.players[id].specialization.damage);
       
                     arenaInstance.bullets.push(prot);
                     socket.volatile.broadcast.emit('spawnBullet', prot);
              }
              
=======

              arenaInstance.players.forEach(function (element, index, array) {
                     if (element.id == socket.id) {
                            array.splice(index, 1);
                            console.log("Disconected");
                     }
              })
       });

       socket.on('update', (playerX, playerY, size, mousex, mousey) => {

              arenaInstance.players.forEach(function (element, index, array) {
                     if (element.id == socket.id) {
                            array[index]['x'] = playerX;
                       
                            array[index]['y'] = playerY;
                            array[index]['size'] = size;
                            array[index]['mouseX'] = mousex;
                            array[index]['mousey'] = mousey;

                            socket.volatile.broadcast.emit('updatePositions', socket.id,
                                   playerX, playerY,
                                   size,
                                   mousex, mousey);

                     }
              })
       });
       

       socket.on('newBullet', function (x, y, angle, speed, life, damage) {
              let prot = new bulletServer(x, y, angle, speed, life, damage);
              arenaInstance.bullets.push(prot);
              socket.volatile.broadcast.emit('spawnBullet', prot);
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
       });
       socket.on('createFruits', function (n) {
              for (let i = 0; i <= n; i++) {
                     arenaInstance.createFruit();
              }
<<<<<<< HEAD
              
       });




=======
       });


>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
});
setInterval(function () {
       arenaInstance.update(io);
}, 16);


<<<<<<< HEAD
=======


>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
server.listen(port, function () {

       console.log('Server listening at port %d', port);

<<<<<<< HEAD
});
=======
});
>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
