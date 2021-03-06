'use strict';

import * as T from 'terrific';
import $ from 'jquery';
import Slick from 'slick-carousel'; // eslint-disable-line

/**
 * slider module implementation.
 *
 * @author Bladimir Ardiles <bladimir.ardilescruz@swisscom.com>
 */
T.Module.Slider = T.createModule({
	start(resolve) {
		this.init();

		resolve();
	},

	init() {
		const $ctx = $(this._ctx);
		this.$ctx = $ctx;
		this.$arrowLeft = $('.js-m-slider__arrow--left', $ctx);
		this.$arrowRight = $('.js-m-slider__arrow--right', $ctx);
		this.stateSliderHidden = 'state-m-slider--hidden';
		this.$slider = $('.js-m-slider__reel', $ctx);
		this.stateHidden = 'state-m-slider--hidden';
		this.hasCounter = $('.js-m-slider__counter', this.$ctx).length > 0;

		this.$ctx.on('showMe', this.showMe.bind(this));
		this.$ctx.on('hideMe', this.hideMe.bind(this));
		this.$ctx.on('unslick', this.unslickIt.bind(this));
		this.$ctx.on('slickIt', this.slickIt.bind(this));
	},

	unslickIt() {
		this.$slider.slick('unslick');
	},

	hideMe() {
		this.$ctx.addClass(this.stateSliderHidden);
	},
	showMe() {
		this.$ctx.removeClass(this.stateSliderHidden);
	},

	slickOptions() {
		return {
			arrows: false,
			infinite: true,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			rows: 1,
			dots: true,
			dotsClass: 'm-slider__dots',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
					},
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						dots: true,
					},
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						dots: true,
					},
				},
			],
		};
	},

	slickIt() {
		this.customOnInit();
		if (this.hasCounter) {
			this.$slider.on('init', (event, slick) => {
				const currentSlide = 0;
				this.updateCounter(currentSlide, slick.getDotCount() + 1);
			});

			this.$slider.on('afterChange', (event, slick, currentSlide) => {
				this.updateCounter(Math.floor(currentSlide / slick.options.slidesToScroll), slick.getDotCount() + 1);
			});
		}

		this.$slider.slick(this.slickOptions());

		this.$arrowLeft.on('click', (evt) => {
			evt.preventDefault();
			this.$slider.slick('slickPrev');
		});

		this.$arrowLeft.on('mousedown', (evt) => {
			evt.preventDefault();
		});

		this.$arrowRight.on('mousedown', (evt) => {
			evt.preventDefault();
		});

		this.$arrowRight.on('click', (evt) => {
			evt.preventDefault();
			this.$slider.slick('slickNext');
		});

		this.customEvents();
	},

	updateCounter(currentSlide, amountSlides) {
		this.$counter = $('.js-m-slider__counter', this.$ctx);

		if (this.$counter.length > 0) {
			this.$counter.text(`${currentSlide + 1}/${amountSlides}`);
		}
	},

	customOnInit() {},
	customEvents() {},
});
