'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * blockquote module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-blockquote__button' };
// const stateClasses = { disabled: 'state-blockquote--disabled' };

T.Module.Blockquote = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
