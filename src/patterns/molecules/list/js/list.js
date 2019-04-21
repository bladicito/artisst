'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * list module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-list__button' };
// const stateClasses = { disabled: 'state-list--disabled' };

T.Module.List = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
