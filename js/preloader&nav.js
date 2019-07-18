// Pre-loader

var loader = document.getElementById('loader');

function remove_loader() {
	loader.style.display = 'none';
}



//hamberger menu
var hamberger = document.getElementsByClassName('hamberger');
var nav_links = document.getElementsByClassName('nav_links');
hamberger[0].addEventListener('click', function() {
	nav_links[0].classList.toggle('open');
});


//service menu
var service_menu = document.getElementsByClassName('service_menu');
var service_links = document.getElementsByClassName('service_links');
service_menu[0].addEventListener('click', function() {
	service_links[0].classList.toggle('open');
});


function toggle_service_menu() {
	service_links[0].classList.toggle('open');
}