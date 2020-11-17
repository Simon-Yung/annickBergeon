
// Get the gallery by id
const gallery = document.getElementById('gallery');
//const numberOfImage = document.getElementsByClassName('preview').length;
var numberOfImage = 1;
var currentImage;
var modalIsOpen = false;
//DODGY HACK FOR MULTIPLE GALLERIES CHECK THIS AGAIN LATER:
var galleryName = "";

//this is the modal window
const modal = document.getElementById('modal_window');
//those are the modal image elements
//const imageContainer = document.getElementById('modal_image_container');
const image = document.getElementById('modal_image');

//those are the control bar elements
const purchaseLink = document.getElementById('purchase_link');
const purchaseLinkText = document.getElementById('buy_link_text');
const previous = document.getElementById('previous');
const pagination = document.getElementById('pagination');
const next = document.getElementById('next');
const closeButton = document.getElementById('close');

const title = document.getElementById('title');
const description = document.getElementById('description');


//those are the contextual menu elements
const menu = document.getElementById("contextual_menu");
const menu_next = document.getElementById('menu_next');
const menu_previous = document.getElementById('menu_previous');
const menu_close = document.getElementById('menu_close');
var menuIsVisible = false;

// loader spinner
const loader = document.getElementById('spinner');

function spinIt() {
	loader.style.height = "100%";
	loader.style.width = "100%";
}
//
image.onload = function() {
	loader.style.height = "0";
	loader.style.width = "0";
};

// Modal

// function openModalGallery(imageIDNumber) {

// 	//looking back , i could have just used an array instead of this id system, oh well...
// 	modalIsOpen = true;
// 	//check if image id is within bound, wrap around if not
// 	imageIDNumber = parseInt(imageIDNumber);
// 	if ( imageIDNumber == 0 ) { imageIDNumber = numberOfImage; }
// 	if ( imageIDNumber > numberOfImage ) { imageIDNumber = 1; }
// 	//get the thumbnail by id
// 	let img;
// 	img = document.getElementById(imageIDNumber);
// 	//start spinner
// 	spinIt();
// 	//animate the preview when clicked
// 	img.classList.add("zoom");
// 	img.onanimationend = () => {
// 		img.classList.remove("zoom");
// 	};
// 	//change image, open the modal
// 	modal.style.display = "grid";
// 	pagination.innerHTML = img.dataset.pagination;
// 	image.src = img.src.replace("/thumbnails", "/larges").replace("/products", "/larges");
// 	currentImage = imageIDNumber;

// 	//upadte title
// 	description.innerHTML = img.dataset.description;
// 	title.innerHTML = img.dataset.title;

// 	//update the buy button
// 	//TODO: UPDATE THIS TO REFLECT NEW MODAL
// 	// if ( img.dataset.externalLink == undefined || img.dataset.externalLink == "" ){
// 	// 	purchaseLink.href = "";
// 	// 	purchaseLinkText.innerHTML = img.dataset.description;
// 	// } else{
// 	// 	purchaseLink.href = img.dataset.externalLink;
// 	// 	purchaseLinkText.innerHTML = img.dataset.description;
// 	// }

// 	//prevent scrolling on modal
// 	document.body.style.overflow = 'hidden';
// }

//prev and next
function nextModal(n) {
	currentImage += n;
	openModalGallery(currentImage , galleryName);
}

//custom right click menu

function hideMenu(){
	if (menuIsVisible){
		menu.style.display = 'none';
		menuIsVisible = false;
	}
};

function showMenu( top, left ){
	menu.style.top = top + 'px';
	menu.style.left = left + 'px';
	menu.style.display = 'flex';
	menuIsVisible = true;
};


// EVENTLISTENER

// FOR THE MENU

addEventListener( 'click' , function(event) {
	hideMenu();
});
addEventListener('contextmenu',function(event){
	if (modalIsOpen){
		let mouseX = event.clientX;
		let mouseY = event.clientY;
		event.preventDefault();
		hideMenu();
		showMenu(mouseY , mouseX);
	}
});

// MENU CONTROLS
menu_previous.addEventListener( 'click' , function(event) {
	nextModal(-1);
});
menu_next.addEventListener( 'click' , function(event) {
	nextModal(+1);
});
menu_close.addEventListener( 'click' , function(event) {
	modal.style.display = "none";
	modalIsOpen = false;
	document.body.style.removeProperty('overflow');
});

// MODAL CONTROLS

closeButton.addEventListener("click", function(){
	modal.style.display = "none";
	modalIsOpen = false;document.body.style.removeProperty('overflow');

}); 
previous.addEventListener("click", function(){
	nextModal(-1);
}); 
next.addEventListener("click", function(){
	nextModal(+1);
}); 
image.addEventListener("click", function(){
	if (!menuIsVisible){
		modal.style.display = "none";
		modalIsOpen = false;
		document.body.style.removeProperty('overflow');
	}
});


// DODGY HACK FOR THAT ONE PORTRAIT GALLERY

function openModalGallery(imageIDNumber , currentGalleryName) {
	galleryName = currentGalleryName;
	modalIsOpen = true;
	//get number of images within that gallery, check if image id is within bound, wrap around if not
	currentImage = parseInt(imageIDNumber);
	numberOfImage = document.getElementById(galleryName).dataset.numberOfImages;
	if ( currentImage == 0 ) { currentImage = parseInt( numberOfImage ); }
	if ( currentImage > numberOfImage ) { currentImage = 1; }
	// console.log(currentImage);
	//get the thumbnail by id
	let img;
	//prefaxe the id number by the gallery name
	img = document.getElementById(galleryName + currentImage);
	//start spinner
	spinIt();
	//animate the preview when clicked
	img.classList.add("zoom");
	img.onanimationend = () => {
		img.classList.remove("zoom");
	};
	//change image, open the modal
	modal.style.display = "grid";
	pagination.innerHTML = img.dataset.pagination;
	image.src = img.src.replace("/thumbnails", "/larges").replace("/products", "/larges");

	//upadte title
	description.innerHTML = img.dataset.description;
	title.innerHTML = img.dataset.title;

	//prevent scrolling on modal
	document.body.style.overflow = 'hidden';
}
