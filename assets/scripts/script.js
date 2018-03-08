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
		mobileNav = $('.mobile-nav');


	$('.nav-toggler').click(function(){
		mobileNav.toggleClass('-is-open');
	});

	setTimeout(function(){
		$('.section-main h1').addClass('-animated');
		$('.section-main h2').addClass('-animated');
	},1000);
		mediaToggler.click(function($event){
		event.preventDefault();
		modal.toggleClass('-active');
	})
	for (var i = 1; i < 4; i++) {
		setTimeout(function(){
		$('.links[i]').toggleClass('-animated');
		},1 + i);
	}
	mediaToggler.click(function(){
	setTimeout(function(){
		$('.modal-map').toggleClass('-animated')
	},2000);
	})

});