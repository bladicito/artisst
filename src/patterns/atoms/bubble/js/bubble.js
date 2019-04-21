'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * bubble module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-bubble__button' };
// const stateClasses = { disabled: 'state-bubble--disabled' };

T.Module.Bubble = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
