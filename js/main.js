let mobile_menu = document.querySelector('.mobile-menu');
let ul_menu = document.querySelector('nav ul');

mobile_menu.addEventListener('click', (event) => {
	if (window.getComputedStyle(ul_menu).display === '' || window.getComputedStyle(ul_menu).display === 'none'){
		ul_menu.classList.remove('remove-menu');
		setTimeout(()=>{
			ul_menu.classList.add('show-menu');
			setTimeout(()=>{
				ul_menu.classList.remove('hide-menu');
			}, 20);
		}, 20);
	}
	else if (window.getComputedStyle(ul_menu).display === 'flex'){
		ul_menu.classList.remove('show-menu');
		setTimeout(()=>{
			ul_menu.classList.add('hide-menu');
		}, 20);
		setTimeout(()=>{
			ul_menu.classList.add('remove-menu');
		}, 500);
	}
});

window.addEventListener('deviceorientation', (event) => {
	window.location.reload();
});

window.addEventListener('orientationchange', (event) => {
	window.location.reload();
});

window.addEventListener('DOMContentLoaded', (event) => {
	if (window.getComputedStyle(mobile_menu).display === 'block'){
		//if (! ul_menu.classList.contains('remove-menu')){
			ul_menu.classList.add('remove-menu');
			ul_menu.classList.add('hide-menu');
			ul_menu.classList.remove('show-menu');
		//}
	}
	else{
		//if (ul_menu.classList.contains('remove-menu')){
			ul_menu.classList.remove('remove-menu');
			ul_menu.classList.remove('hide-menu');
			ul_menu.classList.add('show-menu');
		//}
	}
});