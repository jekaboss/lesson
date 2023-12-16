const icon = document.querySelector('.header__icon-menu');
icon.addEventListener('click', () => {
	document.documentElement.classList.toggle('menu-open');
});
