'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * link module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-link__button' };
// const stateClasses = { disabled: 'state-link--disabled' };

T.Module.Link = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
