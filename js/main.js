let mobile_menu = document.querySelector('.mobile-menu');
let ul_menu = document.querySelector('nav ul');

mobile_menu.addEventListener('click', (event) => {
	event.preventDefault();

	if (ul_menu.style.display === '' || ul_menu.style.display === 'none'){
		ul_menu.style.display = 'flex';
	}
	else if (ul_menu.style.display === 'flex'){
		ul_menu.style.display = 'none';
	}
});

window.addEventListener('deviceorientation', (event) => {
	window.location.reload();
});

window.addEventListener('orientationchange', (event) => {
	/*var orientation = window.orientation;
	switch (orientation){
		case 0:
		case 90:
		case -90: window.location.reload();
		break; 
	}*/
	window.location.reload();
});

//window.addEventListener('load', (event) => {
window.addEventListener('DOMContentLoaded', (event) => {
	if (window.getComputedStyle(mobile_menu).display === 'block'){
		ul_menu.style.display = 'none';
	}
	else{
		ul_menu.style.display = 'flex';
	}
});