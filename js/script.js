//Make dropdown menu appear or hide


const DECOR = document.querySelector("#decor");
const DECORLIST = document.querySelector(".decoration-menu");
const DISHES = document.querySelector("#dishes");
const DISHESLIST = document.querySelector(".dishes-menu");
const NAV = document.querySelector(".navigation-main");

function reveal1() {
DISHESLIST.classList.toggle("hidden");
if (DECORLIST.classList.length <= 1) {
DECORLIST.classList.add("hidden");
}
}

function reveal2() {
DECORLIST.classList.toggle("hidden");
if (DISHESLIST.classList.length <= 1) {
DISHESLIST.classList.add("hidden");
}
}

function closeAll() {
if (DECORLIST.classList.length <= 1) {
DECORLIST.classList.add("hidden");
}
if (DISHESLIST.classList.length <= 1) {
DISHESLIST.classList.add("hidden");
}
}

DISHES.addEventListener("mouseenter", reveal1, false); 
DECOR.addEventListener("mouseenter", reveal2, false); 
NAV.addEventListener("mouseleave", closeAll, false);


//Highlight chosen menu item


const ITEM = document.querySelectorAll(".dropdown-menu li");

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
for ( var i = 0; i < ITEM.length; i++) {
ITEM[i].addEventListener("mouseover", function() {highlight(this);  }, false);
ITEM[i].addEventListener("mouseleave", function() {dehighlight(this);  }, false)
}

