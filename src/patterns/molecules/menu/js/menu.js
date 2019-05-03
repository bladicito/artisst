'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * menu module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-menu__button' };
// const stateClasses = { disabled: 'state-menu--disabled' };

T.Module.Menu = T.createModule({
	states: {
		fixed: 'state-m-menu--fixed',
		open: 'state-m-menu--open',
	},

	selectors: {
		burger: '.js-m-menu__burger',
	},

	start(resolve) {
		this.$ctx = $(this._ctx);
		this.$burgerBtn = $(this.selectors.burger);
		this.$body = $('body');
		this._events.on('Intro.onScroll', this._introScroll.bind(this));

		this.$burgerBtn.on('click', () => {
			this.$body.toggleClass(this.states.open);
		});

		resolve();
	},
	_introScroll(data) {
		if (data.fixMenu) {
			this.$ctx.addClass(this.states.fixed);
		} else {
			this.$ctx.removeClass(this.states.fixed);
		}
	},
});
