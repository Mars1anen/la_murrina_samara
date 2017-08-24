
//Hiding and displaying menu items
const GLYPH1 = document.querySelector("#dishesGlyph");
const GLYPH2 = document.querySelector("#decorGlyph");

//Function for ПОСУДА 
function openTreeDishes() {
GLYPH1.innerHTML = "&#x25BC;";
var dishesBody = document.querySelector("#dishesBody");
dishesBody.classList.toggle("toggleOff");

//looping through an array to set condition

for (var i = 0; i < GLYPH1.classList.length; i++) {
if (GLYPH1.classList[i] === "dishesOpen") {
GLYPH1.innerHTML = "&#9654;";
GLYPH1.classList.remove("dishesOpen");
} else {
GLYPH1.classList.add("dishesOpen");	
}
}

//setting class to get glyph back to closed


}

//Function for Декор -- I need to set this function as if / else condition, with decorOpen being the factor
function openTreeDecor() {
GLYPH2.innerHTML = "&#x25BC;";
var decorBody = document.querySelector("#decorBody");
decorBody.classList.toggle("toggleOff");

//looping through an array to set condition

for (var i = 0; i < GLYPH2.classList.length; i++) {
if (GLYPH2.classList[i] === "decorOpen") {
GLYPH2.innerHTML = "&#9654;";
GLYPH2.classList.remove("decorOpen");
}
}

//setting class to get glyph back to closed

GLYPH2.classList.add("decorOpen");
}

GLYPH1.addEventListener("click", openTreeDishes, false);
GLYPH2.addEventListener("click", openTreeDecor, false);
