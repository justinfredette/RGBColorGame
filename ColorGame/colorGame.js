var color = generateColor(6);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h2 = document.querySelector("h2");
var resetBtn = document.querySelector("#newGame");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	color = generateColor(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++){
		if (color[i]){
			square[i].style.backgroundColor = color[i];
		} else {
			square[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	color = generateColor(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < square.length; i++){
			square[i].style.backgroundColor = color[i];
			square[i].style.display = "block";
	}
});


resetBtn.addEventListener("click", function(){
	//alert("RESET");
	color = generateColor(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = color[i];
	}
	h2.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "new colors";
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++){
	square[i].style.backgroundColor = color[i]

	square[i].addEventListener("click", function(){
		var clickColor = this.style.backgroundColor;

		if(clickColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetBtn.textContent = "Play Again?";
			changeColor(clickColor);
			h2.style.backgroundColor = clickColor;
			//alert("Correct!");
			} else {
				this.style.backgroundColor = "black";
				messageDisplay.textContent = "Try Again!";
				//alert("Wrong!");
			
		}
	});
}

function changeColor(color) {
	//change all squares to correct color
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var randomColor = Math.floor(Math.random() * color.length);
	return color[randomColor];
}

//random RGB
function generateColor(num){
	var arr = []

	for (var i = 0; i < num; i++){

		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}