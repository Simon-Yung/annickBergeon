function resize(className,scale) {

	//i could have remade this toonly set flex basis and a width 
	//and just call resize last line to resize flex growth

	items = document.getElementsByClassName(className);
	for (i = 0; i < items.length ; i++) {
		let ratio
		if ( items[i].dataset.extraWidth == '' || items[i].dataset.extraWidth == '0' ) {
			ratio = (items[i].naturalWidth * 100 / items[i].naturalHeight);
		} else {
			ratio = (items[i].naturalWidth * 100 / items[i].naturalHeight) + parseInt(items[i].dataset.extraWidth);
		}
		let flexBasis = ratio + 'px';
		items[i].style.flex = flexBasis;
		items[i].style.flexGrow = ratio;
		items[i].style.flexShrink = '1';
		//width assignated last otherwise some browser overide it by flex bassis
		items[i].style.width = flexBasis; //because google won't behave  // this actually causes problem when image are larger than the wievport width
	};
  
}

// function resizeLastLine(scale) {

// 	//this function actually resize everything not just the last line, it just prevent the last one from growing

// 	//I had to upadte it as not all elements are alligned byt the top, most are centered vertically
// 	// it now uses center instead of tops

// 	//let lastItem = items[items.length - 1].getBoundingClientRect().top;
// 	let lastItem = ( items[items.length - 1].getBoundingClientRect().top ) + 
// 	( ( items[items.length - 1].getBoundingClientRect().bottom - items[items.length - 1].getBoundingClientRect().top ) / 2 ) ;

// 	let lastLineOfItems = [];
// 	let otherLinesOfItems = [];

// 	for (i = items.length - 1; i > -1; i--) {
// 		let currItem = ( items[i].getBoundingClientRect().top ) + 
// 		( ( items[i].getBoundingClientRect().bottom - items[i].getBoundingClientRect().top ) / 2 ) ;
// 		//I had to add a little bit of marging, otherwise the lenght would never matches
// 		if ( lastItem - currItem < 2 && lastItem - currItem > - 2 ) {
// 			//can't apply thatwhile iterating or the layout get shifted while iterating
// 			//items[i].style.flexGrow = '0';
// 			lastLineOfItems.push(items[i]);
// 		} else {
// 			//let ratio = (items[i].naturalWidth * scale / items[i].naturalHeight);
// 			//items[i].style.flexGrow = ratio;
// 			otherLinesOfItems.push(items[i]);
// 		}
// 	};
// 	lastLineOfItems.forEach(function(item) {
// 		item.style.flexGrow = '0';
// 	});
// 	otherLinesOfItems.forEach(function(item) {
// 		let ratio = (item.naturalWidth * scale / item.naturalHeight);
// 		item.style.flexGrow = ratio;
// 	});
// }

var items;
const scalingRatio = Number( document.getElementById('gallery').dataset.scalingRatio );
window.onload = function(event){
	//resize('preview', scalingRatio);
	// resizeLastLine();
};


// var myEfficientFn = debounce(function() {

// 	//actual work goes here vvv
// 		resizeLastLine(scalingRatio);
// 	//actual work goes here ^^^
	
// 	}, 250);
	
// 	//rebound function vvv
	
// 	function debounce(func, wait, immediate) {
// 		var timeout;
// 		return function() {
// 			var context = this, args = arguments;
// 			var later = function() {
// 				timeout = null;
// 				if (!immediate) func.apply(context, args);
// 			};
// 			var callNow = immediate && !timeout;
// 			clearTimeout(timeout);
// 			timeout = setTimeout(later, wait);
// 			if (callNow) func.apply(context, args);
// 		};
// 	};
	
// window.addEventListener('resize', myEfficientFn);