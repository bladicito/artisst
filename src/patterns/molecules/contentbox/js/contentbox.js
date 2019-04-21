'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * contentbox module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-contentbox__button' };
// const stateClasses = { disabled: 'state-contentbox--disabled' };

T.Module.Contentbox = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
