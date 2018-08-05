
/* In reality thumbnail would be of smaller resolution than the source*/
var items = [
{src: 'https://source.unsplash.com/random/400x300', 
thumbnail: 'https://source.unsplash.com/random/400x300',
name: 'random name 1', 
description: 'random description 1'},
{src: 'https://source.unsplash.com/random/400x300',
thumbnail: 'https://source.unsplash.com/random/400x300',
name: 'random name 2', 
description: 'random description 2'},
{src: 'https://source.unsplash.com/random/400x300', 
thumbnail: 'https://source.unsplash.com/random/400x300',
name: 'random name 3', 
description: 'random description 3'},
{src: 'https://source.unsplash.com/random/400x300', 
thumbnail: 'https://source.unsplash.com/random/400x300',
name: 'random name 4', 
description: 'random description 4'},
{src: 'https://source.unsplash.com/random/400x300', 
thumbnail: 'https://source.unsplash.com/random/400x300',
name: 'random name 5', 
description: 'random description 5'},
{src: 'https://source.unsplash.com/random/400x300',
thumbnail: 'https://source.unsplash.com/random/400x300',
name: 'random name 6', 
description: 'random description 6'},
{src: 'https://source.unsplash.com/random/400x300', 
thumbnail: 'https://source.unsplash.com/random/400x300',
name: 'random name 7', 
description: 'random description 7'},
{src: 'https://source.unsplash.com/random/400x300', 
thumbnail: 'https://source.unsplash.com/random/400x300',
name: 'random name 8', 
description: 'random description 8'},

]

var renderItems = function(items) {
	var item_template = document.getElementsByClassName("item")[0]
	items.forEach(function(item) {
	  var new_item = item_template.cloneNode(true);
	  new_item.getElementsByClassName('media')[0].src = item.thumbnail;
	  new_item.onclick = function() {
	  	openModal(item);
	  }
	  document.getElementById('container').appendChild(new_item)
	});
}

var openModal = function(item_details) {
	var modal = document.getElementById('modal');

	document.getElementById('large_img').src = item_details.src;
	document.getElementById('name').textContent = item_details.name;
	document.getElementById('description').textContent = item_details.description;
	modal.style.display = 'block';
}

var closeModal = function() {
	var modal = document.getElementById('modal');
	modal.style.display = 'none';
}