'use strict';

import * as T from 'terrific';
import $ from 'jquery';
import svg4everybody from 'svg4everybody';

/**
 * Icon module implementation.
 *
 * @author Bladimir Ardiles <bladimir.ardilescruz@swisscom.com>
 */

// const selectors = { button: '.js-logo__button' };
// const stateClasses = { disabled: 'state-logo--disabled' };

T.Module.Icon = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		svg4everybody({});

		resolve();
	},
});
