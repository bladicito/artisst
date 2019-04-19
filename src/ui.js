/* global module */

import '@babel/polyfill';
import * as T from 'terrific';
import $ from 'jquery';

import './shared/base/reset/css/reset.scss';
import './shared/base/document/css/document.scss';
import './shared/utils/grid/grid.scss';
import './shared/utils/typography/typography.scss';

// import './shared/base/security/js/security';

import './patterns/atoms/title';
import './patterns/molecules/grid';
import './patterns/atoms/blockquote';
import './patterns/atoms/subtitle';
import './patterns/molecules/menu';
import './patterns/molecules/image';
import './patterns/molecules/slider';
import './patterns/organisms/intro';

// custom code
console.log("I'm from the entry point ui"); // eslint-disable-line

// terrificjs
$(() => {
	const application = new T.Application();
	application.registerModules();
	application.start();
});
