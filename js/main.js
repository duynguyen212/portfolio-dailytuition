$(document).ready(function(){
	let $btns = $('.projects-area .button-group button');	

	$btns.click(function(e){
		$('.projects-area .button-group button').removeClass('active');

		e.target.classList.add('active');
		
		let selector = $(e.target).attr('data-filter');
		$('.projects-area .grid').isotope({
			filter: selector
		});

		return false;
	});

	//readmore https://dimsemenov.com/plugins/magnific-popup/
	$('.projects-area .grid .test-popup-link').magnificPopup({
		type: 'image',
		gallery: {enabled:true}
	});

	//owl-carousel
	$('.site-main .about-area .owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			544: {
				items: 2
			}
		}
	});

	//sticky navigation
	let nav_offset_top = $('.header-area').height() + 50;

	function navbarFixed() {
		if($('.header-area').length) {
			$(window).scroll(function() {
				let scroll = $(window).scrollTop();
				if(scroll >= nav_offset_top) {
					$('.header-area .main-menu').addClass('navbar_fixed');
				} else {
					$('.header-area .main-menu').removeClass('navbar_fixed');
				}
			});
		}
	}

	navbarFixed();
});

