let mobile_menu = document.querySelector('.mobile-menu');
let ul_menu = document.querySelector('nav ul');

mobile_menu.addEventListener('click', (event) => {
	event.preventDefault();
	event.stopPropagation();

	/* NOT working properly. Shows menu but not able to hide it.
	console.log('before: ul_menu display style = '+ window.getComputedStyle(ul_menu).display);
	console.log('before: ul_menu display style2 = '+ ul_menu.style.display);
	if (ul_menu.style.display === '' || ul_menu.style.display === 'none'){
		//ul_menu.style.display = 'flex';
		ul_menu.classList.remove('remove-menu');
		setTimeout(()=>{
			ul_menu.classList.add('show-menu');
			setTimeout(()=>{
				ul_menu.classList.remove('hide-menu');
			}, 20);
		}, 20);

		console.log('ul_menu classes = '+ ul_menu.classList);
		console.log('ul_menu display style = '+ window.getComputedStyle(ul_menu).display);
	}
	//else if (ul_menu.style.display === 'flex'){
	else if (window.getComputedStyle(ul_menu).display === 'flex'){
		console.log(1);
		//ul_menu.style.display = 'none';
		ul_menu.classList.add('hide-menu');
		setTimeout(()=>{
			ul_menu.classList.remove('show-menu');
			setTimeout(()=>{
				ul_menu.classList.add('remove-menu');
			}, 20);
		}, 20);
	}
	*/

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
		//ul_menu.style.display = 'none';
		if (! ul_menu.classList.contains('remove-menu')){
			ul_menu.classList.add('remove-menu');
			ul_menu.classList.add('hide-menu');
			ul_menu.classList.remove('show-menu');
		}
	}
	else{
		//ul_menu.style.display = 'flex';
		if (ul_menu.classList.contains('remove-menu')){
			ul_menu.classList.remove('remove-menu');
			ul_menu.classList.remove('hide-menu');
			ul_menu.classList.add('show-menu');
		}
	}
});