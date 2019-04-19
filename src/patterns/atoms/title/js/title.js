'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * title module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-title__button' };
// const stateClasses = { disabled: 'state-title--disabled' };

T.Module.Title = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
