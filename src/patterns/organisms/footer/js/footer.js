'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * footer module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-footer__button' };
// const stateClasses = { disabled: 'state-footer--disabled' };

T.Module.Footer = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
