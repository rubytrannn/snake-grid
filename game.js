var canvas; 
var ctx; 
var w = 800; 
var h = 600; 
var colour = ["silver","red", "yellow", "green", "blue", "gold", "purple", "brown"]; 

setUpCanvas();

for(var i = 0; i<20; i++){
	lineOfSquares(i); 
}


function lineOfSquares(y){
	for(var i = 0; i <50; i++){
 		square(i*30, y*30,30,colour[randi(8)]); 
 		square(i*30, y*30,30,colour[i%8]);
	}


}

function square(x,y,s,c){
	ctx.beginPath(); 
	ctx.moveTo(x,y); 
	ctx.lineTo(x+s,y);  
	ctx.lineTo(x+s,y+s);
	ctx.lineTo(x,y+s);
	ctx.lineTo(x,y);
	ctx.strokeStyle = c;
	ctx.stroke(); 
}


function randi(range){
	var r = Math.floor(Math.random()*range);
	return r 
}
function rand(range){
	var r = Math.random()*range; 
	return r
}

function setUpCanvas(){
	canvas = document.querySelector("#myCanvas");
	ctx = canvas.getContext("2d"); 
	canvas.width = w; 
	canvas.height = h; 
	canvas.style.border = "5px dotted black";
}


var snakeW = 30;
var snakeH = 30;

var pythonW = 30;
var pythonH = 30;

// default direction
var direction = "right";

// read users direction
document.addEventListener("keydown", getDirection);
function getDirection(e){
	if(e.keyCode == 37 && direction != "right"){
		direction = "left";
	} else if(e.keyCode == 38 && direction != "down"){
		direction = "up";
	}else if(e.keyCode == 39 && direction != "left"){
		direction = "right";
	}else if(e.keyCode == 40 && direction != "up"){
		direction = "down";
	} 
}


function drawSnake(x,y){
	ctx.fillStyle = "black";
	ctx.fillRect(x*snakeW,y*snakeH,snakeH,snakeW);

	ctx.strokeStyle = "white";
	ctx.strokeRect(x*snakeW,y*snakeH,snakeH,snakeW);
}


function drawPython(x,y){
	ctx.fillStyle = "red";
	ctx.fillRect(x*pythonW,y*pythonH,pythonH,pythonW);

	ctx.strokeStyle = "white";
	ctx.strokeRect(x*pythonW,y*pythonH,pythonH,pythonW);
}



// create the first snake object
var snakeLength = 8;
var snake = [];

for (var i = snakeLength - 1; i >= 0; i--) {
	snake.push({x:1, y:0});
}

// the second snake
var pythonLength = 8;
var python = [];

for (var i = pythonLength - 1; i >= 0; i--) {
	python.push({x:1, y:0});
}



function draw(){
	ctx.clearRect(0,0,w,h);

	for (var i = 0; i < snake.length; i++) {
		var x = snake[i].x  ;
		var y = snake[i].y ;
		drawSnake(x,y);
	}

	for (var i = 0; i < python.length; i++) {
		var x = python[i].x + 10;
		var y = python[i].y + 10;
		drawPython(x,y);
	}



	for(var i = 0; i<20; i++){
	lineOfSquares(i); 
}

	for(var i = 0; i <50; i++){
 		square(i*30, y*30,30,colour[randi(8)]); 
 		square(i*30, y*30,30,colour[i%8]);
	}



	// snake head
	var snakeX = snake[0].x;
	var snakeY = snake[0].y;

	//2nd one
	var pythonX = python[0].x;
	var pythonY = python[0].y;

	// if the snake hits the wall, it restarts
	if(snakeX < 0 || snakeY <0 || snakeX >= w/snakeW || snakeY >= h/snakeH){
		location.reload();
	}

	// 2nd one
	if(pythonX < 0 || pythonY <0 || pythonX >= w/pythonW || pythonY >= h/pythonH){
		location.reload();
	}

	// pop is used to remove the tail
	snake.pop();
	python.pop();


	// creating new head and removing tail to visually create motion
	if( direction == "left") snakeX --;
		else if ( direction == "up") snakeY--;
		else if ( direction == "right") snakeX++;
		else if ( direction == "down") snakeY++;
		
	if( direction == "left") pythonX --;
		else if ( direction == "up") pythonY--;
		else if ( direction == "right") pythonX++;
		else if ( direction == "down") pythonY++;



	var newHead = {
		x: snakeX,
		y: snakeY
	};

	snake.unshift(newHead);

	var newHead2 = {
		x: pythonX,
		y: pythonY
	};

	python.unshift(newHead2);

}

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", Stop);

var pythonX;
var pythonY;

var snakeX;
var snakeY;
window.onlcick = Stop;
function Stop(){
    console.log("Stopped");
    stopButton.addEventListener("click", Stop);
}

// function testCollisioin(x,y,array){
// 	for(var i=0; i<array.length; i++){
// 		if( x == array[i].x && y == array[i].y){
// 			return true;
// 		}
// 	}
// 	return false;
// }

// var shape;

// function onKeySpace(e){
// 	ctx.fillStyle = "black";
// 	ctx.fillRect (snakeX,snakeY,snakeH,snakeW);

// 	ctx.strokeStyle = "white";
// 	ctx.strokeRect(snakeX,snakeY,snakeH,snakeW);
// }

// onKeySpace();







// if (document.getElementById("stopButton").innerHTML = true) {
// 	snake.stop();
// }


// var draw = {
// 	value: false
// };

// document.getElementById("stopButton").addEventListener("click", function()){
// 	draw.value != draw.value;
// 	if (draw.value) {
// 		var len = 4;
// 		var snake = [];

// 		for (var i = len- 1; i >= 0; i--) {
// 			snake.push({x:1, y:0});
// }
// 	}
// }


setInterval(draw,70);

draw();

console.log("Welcome to Final Project")