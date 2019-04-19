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
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
