

export default class KenBurnsController {
	constructor() {
		this.process();
	}
	
	process(){
		console.log("Hello from Ken Burn Controller!");
		/*
	JavaScript For Responsive Bootstrap Carousel

    Author: Razboynik
    Author URI: http://filwebs.ru
    Description: Bootstrap Carousel Effect Ken Burns

*/

			
			/*-----------------------------------------------------------------*/
			/* ANIMATE SLIDER CAPTION
			/* Demo Scripts for Bootstrap Carousel and Animate.css article on SitePoint by Maria Antonietta Perna
			/*-----------------------------------------------------------------*/
			"use strict";
			function doAnimations(elems) {
				//Cache the animationend event in a variable
				let animEndEv = 'webkitAnimationEnd animationend';
				elems.each(function () {
					let $this = $(this),
						$animationType = $this.data('animation');
					$this.addClass($animationType).one(animEndEv, function () {
						$this.removeClass($animationType);
					});
				});
			}
			//Variables on page load
			let $immortalCarousel = $('.animate_text'),
				$firstAnimatingElems = $immortalCarousel.find('.item:first').find("[data-animation ^= 'animated']");
			//Initialize carousel
			$immortalCarousel.carousel();
			//Animate captions in first slide on page load
			doAnimations($firstAnimatingElems);
			//Other slides to be animated on carousel slide event
			$immortalCarousel.on('slide.bs.carousel', function (e) {
				let $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
				doAnimations($animatingElems);
			});
			
		}
	
	
}