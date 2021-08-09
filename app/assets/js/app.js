window.addEventListener('load', e => {
	// Click menu
	const headerLinks = document.querySelectorAll('.header__link');
	[...headerLinks].forEach(item =>
		item.addEventListener('click', handleClickLink)
	);
	function handleClickLink(e) {
		[...headerLinks].forEach(item => item.classList.remove('active'));
		e.target.classList.add('active');
	}

	// Click toggle menu
	const headerBars = document.querySelector('.header__bars');
	const headerMenu = document.querySelector('.header__menu');
	headerBars.addEventListener('click', e => {
		headerMenu.classList.toggle('is-show');
		e.target.classList.toggle('fa-bars');
		e.target.classList.toggle('fa-times');
	});
	document.addEventListener('click', e => {
		if (
			!headerMenu.contains(e.target) &&
			!e.target.matches('.header__bars')
		) {
			headerMenu.classList.remove('is-show');
			headerBars.classList.remove('fa-times');
			headerBars.classList.add('fa-bars');
		}
	});
});
