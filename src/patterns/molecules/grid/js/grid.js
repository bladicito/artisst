'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * grid module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-grid__button' };
// const stateClasses = { disabled: 'state-grid--disabled' };

T.Module.Grid = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
