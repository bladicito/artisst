'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * Teaser implementation for the Videobrightcove
 *
 * @author Bladimir Ardiles <bladimir.ardilescruz@swisscom.com>
 */

T.Module.Slider.Intro = T.createDecorator({
	start() {
		this._parent.init();
		this.slickIt();
	},

	getSlidesData() {
		const data = [];
		this.$slides.each((index, item) => {
			data.push($(item).triggerHandler('getLightGallerySlideInfo'));
		});

		return data;
	},

	slickOptions() {
		return {
			arrows: false,
			infinite: true,
			adaptiveHeight: true,
			speed: 1200,
			autoplay: true,
			autoplaySpeed: 4000,
			pauseOnHover: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			rows: 1,
			dots: false,
			fade: true,
			cssEase: 'linear',
			dotsClass: 'm-slider__dots',
		};
	},
});
