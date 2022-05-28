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

window.addEventListener('DOMContentLoaded', (event) => {
	if (mobile_menu.style.display !== '' && mobile_menu.style.display !== 'none'){
		console.log('yes');
	}
});