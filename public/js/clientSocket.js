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
});