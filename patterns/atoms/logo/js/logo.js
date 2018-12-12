((($) => {
	'use strict';
	/**
	 * logo module implementation.
	 *
	 * @author Bladimir Ardiles <bladimir.ardilescruz@swisscom.com>
	 */
	T.Module.Logo = T.createModule({
		start(resolve) {
			const $ctx = $(this._ctx);

			resolve();
		},
	});
})(jQuery));
