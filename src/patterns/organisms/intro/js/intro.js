'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * intro module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-menu__button' };
// const stateClasses = { disabled: 'state-menu--disabled' };

T.Module.Intro = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		const debouncer = this.debounce(() => {
			const fixMenu = this.onViewport();
			this._events.emit('Intro.onScroll', { fixMenu });
		}, 10);

		$(window).on('scroll', debouncer);

		resolve();
	},

	onViewport() {
		return $(window).scrollTop() > this.$ctx.height();
	},

	debounce(fn, wait = 20) {
		let timeout;
		return function(...args) {
			clearTimeout(timeout);
			timeout = setTimeout(() => fn.call(this, ...args), wait);
		};
	},
});
