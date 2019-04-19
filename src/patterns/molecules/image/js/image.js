'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * image module implementation.
 *
 * @author Bladimir Ardiles <bladimir.ardilescruz@swisscom.com>
 */

const stateClasses = {
	pending: 'state-m-image--pending',
	loading: 'state-m-image--loading',
	loaded: 'state-m-image--loaded',
	hidden: 'state-m-image--hidden',
};

window.lazySizesConfig = window.lazySizesConfig || {};

window.lazySizesConfig.preloadAfterLoad = true;
window.lazySizesConfig.preloadClass = stateClasses.pending;
window.lazySizesConfig.loadingClass = stateClasses.loading;
window.lazySizesConfig.loadedClass = stateClasses.loaded;
window.lazySizesConfig.debug = false;

T.Module.Image = T.createModule({
	start(resolve) {
		this.$ctx = $(this._ctx);

		resolve();
	},
});
