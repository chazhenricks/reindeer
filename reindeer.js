var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var coolReindeer="";

var hohohoElement = document.getElementById("reindeer");


for (var i=0; i<reindeer.length; i++){
	coolReindeer = colors[i] + " " + reindeer[i]
	hohohoElement.innerHTML += "<p>" + coolReindeer + "</p>";
}