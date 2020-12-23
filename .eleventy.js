const fg = require('fast-glob');
const sizeOf = require('image-size');
var url = require('url');
var http = require('http');

function searchByGlob(glob){
	//this function DOES NOT return the initial / slash 
	// YOU NEED to add it in the layout file
	let resultArray = fg.sync(glob);
	return resultArray;
}

module.exports = function(eleventyConfig) {

	//get every folders in /galleries
	const galleries =  fg.sync('gallery/*', { onlyDirectories: true, deep: 0 , dot: false });

	//for each of the folder
	galleries.forEach(
		function (value) {

			//create a collection named as the folder 's name
			let title = value.replace('gallery/','');

			eleventyConfig.addCollection( title, function(collectionApi) {

				//get the images in the ''larges'' folder and sort them alphabetically
				let collection = searchByGlob( value + "/thumbnails/*.???");
				collection.sort();

				return collection;
			});
		}

	);

	// eleventyConfig.addFilter("masonry", function(value,collectionName,websiteUrl,extraWidth) {
	// 	let options = url.parse( 'http://' + websiteUrl + '/gallery/' + collectionName + '/thumbnails/' + value);

	// 	http.get(options, function (response) {
	// 		var chunks = [];
	// 		response.on('data', function (chunk) {
	// 			chunks.push(chunk);
	// 		}).on('end', function() {
	// 			var buffer = Buffer.concat(chunks);
	// 			console.log(sizeOf(buffer));
	// 		});
	// 	});


	// 	// let dimensions = sizeOf( websiteUrl + '/gallery/' + collectionName + '/thumbnails/' + value);
	// 	// let ratio = (dimensions.width * 100 / items[i].dimensions.height) + parseInt(extraWidth);
	// 	// return 'style="flex: ' + ratio + '1 ' + ratio + 'px; width: ' + ratio + 'px;"';
	// });

	//pass through copy for css javascript and internal images
	eleventyConfig.addPassthroughCopy({ "_includes/assets": "includes/assets" });
	eleventyConfig.addPassthroughCopy({ "gallery": "gallery" });
	eleventyConfig.addPassthroughCopy({ "movies": "movies" });
	eleventyConfig.addPassthroughCopy({ "favicon.ico": "favicon.ico" });
	eleventyConfig.addPassthroughCopy({ "favicon.png": "favicon.png" });

};