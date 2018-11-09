((($) => {
	'use strict';
	/**
	 * intro module implementation.
	 *
	 * @author Bladimir Ardiles <bladi_sys@hotmail.com>
	 */
	T.Module.Intro = T.createModule({
		start(resolve) {
			const $ctx = $(this._ctx);

			resolve();
		},
	});
})(jQuery));
