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

	// Change background color on scroll header
	const header = document.querySelector('.header');
	window.addEventListener('scroll', e => {
		if (window.pageYOffset >= 300) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	});

	// Click toggle menu header
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

	// Change background-image slider section Home
	const homeCircles = document.querySelectorAll('.home__circle');
	const homeImg = document.querySelector('.home__img');
	[...homeCircles].forEach(item =>
		item.addEventListener('click', handleChangeBackgroundImg)
	);
	function handleChangeBackgroundImg(e) {
		[...homeCircles].forEach(item => item.classList.remove('active'));
		e.target.classList.add('active');
		const dataAtb = e.target.dataset.img;
		if (dataAtb === '1') {
			homeImg.setAttribute('src', './assets/img/home__1.png');
		} else if (dataAtb === '2') {
			homeImg.setAttribute('src', './assets/img/home__2.jpg');
		} else if (dataAtb === '3') {
			homeImg.setAttribute('src', './assets/img/home__3.jpg');
		}
	}
	// Change background-color when click section works
	const worksfilters = document.querySelectorAll('.works__filter');
	[...worksfilters].forEach(item =>
		item.addEventListener('click', handleClickFilter)
	);
	function handleClickFilter(e) {
		[...worksfilters].forEach(item => item.classList.remove('active'));
		e.target.classList.add('active');
	}

	// Change slider when click
	const circles = document.querySelectorAll('.common__circle');
	const featuresContents = document.querySelectorAll('.features__content');
	const teamWrapper = document.querySelectorAll('.team__wrapper');
	[...circles].forEach(item =>
		item.addEventListener('click', handleClickCircle)
	);
	function handleClickCircle(e) {
		[...circles].forEach(item => item.classList.remove('active'));
		[...featuresContents].forEach(item => item.classList.remove('active'));
		e.target.classList.add('active');

		// Change content when click section features
		[...featuresContents].forEach(item => {
			if (e.target.dataset.circle === item.dataset.content) {
				item.classList.add('active');
			}
		});

		// Change person when click section team
		[...teamWrapper].forEach(item => item.classList.remove('active'));
		[...teamWrapper].forEach(item => {
			if (e.target.dataset.circle === item.dataset.person) {
				item.classList.add('active');
			}
		});
	}
});
