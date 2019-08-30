<<<<<<< HEAD
//Emitir o player criado
//Caso a sala ja tenha playerPrincipal ela adiciona mais um player;

//Caso não tenha ela adiciona como player principal;
//E manda os players restantes



socket.on('addPlayer', (newSocket) => {
  if (world.playerPrincipal) {
    //se ja ten player principal
    world.addPlayer(newSocket);
  } else {
    world.setPlayer(newSocket);
  }
});


socket.on('addOtherPlayers', (players) => {
  world.createPlayers(players);
});



socket.on('updatePositions', (id, playerX, playerY, size, mousex, mousey) => {
  if (world) {
    //console.log(world.players, id);
    world.players[id].pos.x = playerX;
    world.players[id].pos.y = playerY;

    world.players[id].size = size;

    world.players[id].mira.x = mousex;
    world.players[id].mira.y = mousey;
  }
});

socket.on('disconectPlayer', (disconectedID) => {
  if (world) {
    delete world.players[disconectedID];
  }
=======
socket.on('mensagem', function (mensagem) {

    world.createPlayers(mensagem);

});

socket.on('updatePositions', (id, playerX, playerY, size, mousex, mousey) => {
  
    if(world){
      
      for (let p of world.players) {

        if (p.id == id) {

            p.pos.x = playerX;

            p.pos.y = playerY;
          
            p.size = size;
            
            p.mira.x = mousex;
          
            p.mira.y = mousey;

        }

    }
    }
    

});


socket.on('newSocket', (newSocket) => {

    world.players.push(new protPlayer(newSocket.name,
                                      newSocket.x,
                                      newSocket.y,
                                      newSocket.id, 
                                      newSocket.size,
                                      newSocket.mousex,
                                      newSocket.mousey));

});

socket.on('disconectPlayer', (disconectedID) => {

    for (var i = 0; i < world.players.length; i++) {

        if (world.players[i]['id'] == disconectedID) {

            world.players.splice(i, 1);

        }

    }

>>>>>>> 4bc522b585b1cdeb48c6de2bd795e164b3cc0c46
});