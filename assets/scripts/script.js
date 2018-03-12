$(document).ready(function() {

	let backgrounds = [
	'bg1.png', 
	'bg2.png'
	]

	let links = [
	'.modal-links a:first-child',
	'.modal-links a:nth-child(2)',
	'.modal-links a:last-child'
	]

	$('#particles-js').css({
		'background-image':'url(./assets/images/' + backgrounds[Math.floor(Math.random() * (2 - 0) + 0)] + ')'
	});

	let mediaToggler = $('.js-modal-toggler'),
		modal = $('.modal'),
		mobileNav = $('.mobile-nav'),
		modalElements = [
			'.js-icon-github',
			'.js-icon-vk',
			'.js-icon-mail',
			'.modal-map',
			'.modal-toggler'
		];


	mobileNav.click(function($event) {
		event.preventDefault();
		if (modal.hasClass('-active')) {
			modal.removeClass('-active');
		}
		else {
			mobileNav.toggleClass('-is-open');
		};
	});

	setTimeout(function(){
		$('.section-main h1').addClass('-animated');
		$('.section-main h2').addClass('-animated');
	},1000);

	mediaToggler.click(function($event){
		event.preventDefault();
		modal.toggleClass('-active');
		for (let i = 0; i < modalElements.length; i++) {
			const delay = 200 * i;
			
			setTimeout(function() {
				$(modalElements[i]).toggleClass('-animated');
			}, 200 + delay)
		}
	})
});