player1 = {
	x: 19,
	y: 17
}

nps = {
	x: 1,
	y: 1
}
var scope = 1


map = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
	[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];
var el = document.getElementById('world');

for(var z = 0; z < 1000; z++) {
    var color = Math.floor(Math.random() * (10 - 6 + 1)) + 6
    var rndy = Math.round((Math.random() * 18)+1)
    var rndx = Math.round((Math.random() * 16)+1)
        if(map[rndx][rndy] !== 4 && map[rndx][rndy] !== 5){
            map[rndx][rndy] = color
  }
}

function win(){
    scope = 0
	for(var y = 0; y < map.length ; y++) {
		for(var x = 0; x < map[y].length ; x++) {
		    if(map[y][x] === 3){
		    scope += 1
		    document.getElementById('scope').innerHTML = scope;
		    if(scope == 171){
		        alert("ПОБЕДА!!!")
		        }
		    }

		}
	}
}

function drawWorld(){
	el.innerHTML = '';
	for(var y = 0; y < map.length ; y++) {
		for(var x = 0; x < map[y].length ; x++) {
			if (map[y][x] === 1) {
				el.innerHTML += "<div class='wall'></div>";
			}
			else if (map[y][x] === 2) {
				el.innerHTML += "<div class='ground2'></div>";
			}
			else if (map[y][x] === 3) {
				el.innerHTML += "<div class='ground'></div>";
			}
			else if (map[y][x] === 4) {
				el.innerHTML += "<div class='nps'></div>";
			}
			else if (map[y][x] === 5) {
				el.innerHTML += "<div class='player1'></div>";
			}
			else if (map[y][x] === 6) {
				el.innerHTML += "<div class='ground3'></div>";
			}
			else if (map[y][x] === 7) {
				el.innerHTML += "<div class='ground4'></div>";
			}
			else if (map[y][x] === 8) {
				el.innerHTML += "<div class='ground5'></div>";
			}
			else if (map[y][x] === 9) {
				el.innerHTML += "<div class='ground6'></div>";
			}
			else if (map[y][x] === 10) {
				el.innerHTML += "<div class='ground7'></div>";
			}
		}
		el.innerHTML += "<br>";
		console.log(map)
       }
}
drawWorld();


document.onkeydown = function(event){
	if (event.keyCode === 37){ //LEFT
		if ( map[player1.y][player1.x-1] !== 1 && map[player1.y][player1.x-1] !== 4){
			map[player1.y][player1.x] = 3;
			player1.x = player1.x - 1;
			map[player1.y][player1.x] = 5;
			drawWorld();
			win();
		}
	}
	else if (event.keyCode === 38){ //UP
		if ( map[player1.y-1][player1.x] !== 1 && map[player1.y-1][player1.x] !== 4){
			map[player1.y][player1.x] = 3;
			player1.y = player1.y - 1;
			map[player1.y][player1.x] = 5;
			drawWorld();
			win();
		}
	}
	else if (event.keyCode === 39){ //RIGHT
		if ( map[player1.y][player1.x+1] !== 1 && map[player1.y][player1.x+1] !== 4){
			map[player1.y][player1.x] = 3;
			player1.x = player1.x + 1;
			map[player1.y][player1.x] = 5;
			drawWorld();
			win();
		}
	}
	else if (event.keyCode === 40){ //DOWN
		if ( map[player1.y+1][player1.x] !== 1 && map[player1.y+1][player1.x] !== 4){
			map[player1.y][player1.x] = 3;
			player1.y = player1.y + 1;
			map[player1.y][player1.x] = 5;
			drawWorld();
			win();
		}
	}
};

document.onkeyup = function(event){
  if(event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40 ){
        if(map[nps.y][nps.x-1] === 3){
            map[nps.y][nps.x] = 2;
           nps.x = nps.x - 1;
           map[nps.y][nps.x] = 4;
           drawWorld();
           win();
           }
        else if(map[nps.y][nps.x+1] === 3){
           map[nps.y][nps.x] = 2;
           nps.x = nps.x + 1;
           map[nps.y][nps.x] = 4;
           drawWorld();
           win();
           }
        else if(map[nps.y+1][nps.x] === 3){
           map[nps.y][nps.x] = 2;
           nps.y = nps.y + 1;
           map[nps.y][nps.x] = 4;
           drawWorld();
           win();
           }
        else if(map[nps.y-1][nps.x] === 3){
           map[nps.y][nps.x] = 2;
           nps.y = nps.y - 1;
           map[nps.y][nps.x] = 4;
           drawWorld();
           win();
           }
        else if((map[nps.y][nps.x+1] ===  6, 7, 8, 9 ,10) && (map[nps.y][nps.x+1] !== 1 && map[nps.y][nps.x+1] !== 5)){
           map[nps.y][nps.x] = 2;
           nps.x = nps.x + 1;
           map[nps.y][nps.x] = 4;
           drawWorld();
           win();
         }
        else if((map[nps.y+1][nps.x] === 6, 7, 8, 9, 10) && (map[nps.y+1][nps.x] !== 1 && map[nps.y+1][nps.x] !== 5)){
           map[nps.y][nps.x] = 2;
           nps.y = nps.y + 1;
           map[nps.y][nps.x] = 4;
           drawWorld();
           win();
        }
        else if((map[nps.y-1][nps.x] === 6, 7, 8, 9, 10) && (map[nps.y-1][nps.x] !== 1 && map[nps.y-1][nps.x] !== 5)){
           map[nps.y][nps.x] = 2;
           nps.y = nps.y - 1;
           map[nps.y][nps.x] = 4;
           drawWorld();
           win();
           }
        else if((map[nps.y][nps.x-1] === 6, 7, 8, 9, 10) && (map[nps.y][nps.x-1] !== 1 && map[nps.y][nps.x-1] !== 5)){
           map[nps.y][nps.x] = 2;
           nps.x = nps.x - 1;
           map[nps.y][nps.x] = 4;
           drawWorld();
           win();
           }







  }
  drawWorld()
};
