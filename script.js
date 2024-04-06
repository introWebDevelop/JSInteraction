let heading = document.getElementById("title");
let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("outputText");
let inputElement = document.getElementById("myInput");

let food = ["ramen", "kbbq", "pad thai", "carbonara", "pizza", "sushi"];

executeButton.addEventListener("click", function() {
	let currentInputText = inputElement.value;
	generator(currentInputText);
	restyle();

});

function generator(userInput) {
	let randomIndex = Math.floor(Math.random() * food.length);
	console.log(randomIndex);
	let selectedRandomFoodText = food[randomIndex];
	outputParagraph.innerText = userInput + " should try " + selectedRandomFoodText;  
}


function restyle() {
	let randR = Math.random() * 255;
	let randG = Math.random() * 255;
	let randB = Math.random() * 255; 
	let randOutputColor = "rgb("+randR+","+randG+","+randB+")";
	outputParagraph.style.backgroundColor = randOutputColor;

	heading.style.color = randOutputColor;
	heading.style.fontSize = "5rem"; 

}