'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * paragraph module implementation.
 *
 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
 */

// const selectors = { button: '.js-paragraph__button' };
// const stateClasses = { disabled: 'state-paragraph--disabled' };

T.Module.Paragraph = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
