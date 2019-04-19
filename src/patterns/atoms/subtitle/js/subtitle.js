'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * subtitle module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-subtitle__button' };
// const stateClasses = { disabled: 'state-subtitle--disabled' };

T.Module.Subtitle = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
