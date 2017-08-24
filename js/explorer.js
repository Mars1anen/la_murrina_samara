//Arrow scrolling of images
var images = document.querySelectorAll(".current-image");
var leftArrow = document.querySelector("#arrow_left");
var rightArrow = document.querySelector("#arrow_right");

var n = 0;
function nextImage() {
	
	if ( n < images.length-1) {
		images[n].classList.remove("toggleOn");
		images[n].classList.add("toggleOff");
		n++;
		images[n].classList.remove("toggleOff");
		images[n].classList.add("toggleOn");
		
	} else {
	images[n].classList.remove("toggleOn");
	images[n].classList.add("toggleOff");
	n = 0;
	images[n].classList.remove("toggleOff");
	images[n].classList.add("toggleOn");
	}
	
}

function previousImage() {
	
	if ( n > 0) {
		images[n].classList.remove("toggleOn");
		images[n].classList.add("toggleOff");
		n--;
		images[n].classList.remove("toggleOff");
		images[n].classList.add("toggleOn");
		
	} else {
	images[n].classList.remove("toggleOn");
	images[n].classList.add("toggleOff");
	n = images.length-1;
	images[n].classList.remove("toggleOff");
	images[n].classList.add("toggleOn");
	}
	
}

leftArrow.addEventListener("click", previousImage, false);
rightArrow.addEventListener("click", nextImage, false);


//All the script for main nav


const DECOR = document.querySelector("#decor");
const DECORLIST = document.querySelector(".decoration-menu");
const DISHES = document.querySelector("#dishes");
const DISHESLIST = document.querySelector(".dishes-menu");
const NAV = document.querySelector(".navigation-main");

function reveal1() {
DISHESLIST.classList.toggle("hidden");
if (DECORLIST.classList.length <= 1) {
DECORLIST.classList.add("hidden");
console.log("closed dishes");
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
console.log("closed");
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

//Gallery for other items
var miniatures = document.querySelectorAll(".miniature");
var upArrow = document.querySelector("#arrows_up");
var downArrow = document.querySelector("#arrows_down");

var p = 0;
function nextMiniature() {
	
	if ( p < miniatures.length-4) {
		upArrow.classList.remove("invisible");
		miniatures[p].classList.add("toggleOff");
		p++;
		miniatures[p+2].classList.remove("toggleOff");
		
	} else {
	miniatures[p].classList.add("toggleOff");
	p++;
	miniatures[p+2].classList.remove("toggleOff");
	downArrow.classList.add("invisible");
	upArrow.classList.remove("invisible");
	}
	
}

function previousMiniature() {
	
	if ( p > 1) {
		miniatures[p+2].classList.add("toggleOff");
		p--;
		miniatures[p].classList.remove("toggleOff");
		downArrow.classList.remove("invisible");
		
	} else {
	upArrow.classList.add("invisible");;
	miniatures[p+2].classList.add("toggleOff");
	p--;
	miniatures[p].classList.remove("toggleOff");
	downArrow.classList.remove("invisible");
	upArrow.classList.add("invisible");
	}
	
}


upArrow.addEventListener("click", previousMiniature, false);
downArrow.addEventListener("click", nextMiniature, false);

