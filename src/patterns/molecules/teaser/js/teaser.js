'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * teaser module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-teaser__button' };
// const stateClasses = { disabled: 'state-teaser--disabled' };

T.Module.Teaser = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
