const icon = document.querySelector('.burger-menu');
icon.addEventListener('click', () => {
	document.documentElement.classList.toggle('burger-open');
});