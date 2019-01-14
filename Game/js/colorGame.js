
var numSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var footer = document.querySelector("#footer");
var selected = document.querySelectorAll(".selected");


init()

function init() {
	modeButtonsSetup();
	squaresSetup();
	reset();
}

function modeButtonsSetup() {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent==="Easy" ? numSquares = 3: numSquares = 6;
			reset();
		})
	}
}

function squaresSetup() {
	for (var i = 0; i< squares.length; i++) {
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor) {
				message.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				footer.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				message.textContent = "Try Again";
			}
		})
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	message.textContent = "";
	resetButton.textContent = "New Colors";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.display="none";
		}
	}
	h1.style.background = "steelblue";
	footer.style.background = "steelblue";
}

resetButton.addEventListener("click",function(){
	reset();
})

function changeColors(color){
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb("+ r+", "+g+", "+b+")";
}