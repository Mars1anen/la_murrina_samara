
//Hiding and displaying menu items
const GLYPH1 = document.querySelector("#dishesGlyph");
const GLYPH2 = document.querySelector("#decorGlyph");
var dishesHead = document.querySelector("#dishesHead");
var decorHead = document.querySelector("#decorHead");

function openTreeDishes () {
var dishesBody = document.querySelector("#dishesBody");
for (var i = 0; i < GLYPH1.classList.length; i++) {
if (GLYPH1.classList[i] === "glyph-closed") {
GLYPH1.innerHTML = "&#x25BC;";
GLYPH1.setAttribute("class", "glyph-open");
dishesBody.classList.toggle("toggleOff");
} else {
GLYPH1.innerHTML = "&#9654;";
GLYPH1.setAttribute("class", "glyph-closed");
dishesBody.classList.toggle("toggleOff");
}
}
}

function openTreeDecor () {
var decorBody = document.querySelector("#decorBody");
for (var i = 0; i < GLYPH1.classList.length; i++) {
if (GLYPH2.classList[i] === "glyph-closed") {
GLYPH2.innerHTML = "&#x25BC;";
GLYPH2.setAttribute("class", "glyph-open");
decorBody.classList.toggle("toggleOff");
} else {
GLYPH2.innerHTML = "&#9654;";
GLYPH2.setAttribute("class", "glyph-closed");
decorBody.classList.toggle("toggleOff");
}
}
}


dishesHead.addEventListener("click", openTreeDishes, false);
decorHead.addEventListener("click", openTreeDecor, false);

//Adding highlight to selected li element
const ITEMS = document.querySelectorAll(".list-item");

function highlight(current) {
if (current.classList.length <= 1) {
current.classList.add("active");	
}
}

function dehighlight(current) {
if (current.classList.length <= 2) {
current.classList.remove("active");	
}
}

//looping through array of list items to add Event Listener to each
for ( var i = 0; i < ITEMS.length; i++) {
ITEMS[i].addEventListener("mouseover", function() {highlight(this);  }, false);
ITEMS[i].addEventListener("mouseleave", function() {dehighlight(this);  }, false)
}