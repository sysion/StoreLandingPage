let mobile_menu = document.querySelector('.mobile-menu');
let ul_menu = document.querySelector('nav ul');

mobile_menu.addEventListener('click', (event) => {
	if (window.getComputedStyle(ul_menu).display === '' || window.getComputedStyle(ul_menu).display === 'none'){
		ul_menu.classList.remove('remove-menu');
		setTimeout(()=>{
			ul_menu.classList.add('show-menu');
			setTimeout(()=>{
				ul_menu.classList.remove('hide-menu');
			}, 500);
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

let pageSetup = (()=>{
	if (window.getComputedStyle(mobile_menu).display === 'block'){
		ul_menu.classList.add('remove-menu');
		ul_menu.classList.add('hide-menu');
		ul_menu.classList.remove('show-menu');
	}
	else{
		ul_menu.classList.remove('remove-menu');
		ul_menu.classList.remove('hide-menu');
		ul_menu.classList.add('show-menu');
	}
});

screen.orientation.addEventListener('change', (event) => {
	if (window.getComputedStyle(mobile_menu).display === 'block'){
		pageSetup();
		window.location.reload();
	}
});

window.addEventListener('DOMContentLoaded', pageSetup);