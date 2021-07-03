const path = require('path');
const constants = require('../constants');
const { Container } = require('./container');
const { WindowControls } = require('./windowControls');
// eslint-disable-next-line no-unused-vars
const { LintelBarCreateOptions } = require('./lintelBarCreateOptions');
class LintelBar extends Container {
	/**
	 * @param {LintelBarCreateOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.element = document.createElement('div');
		this.element.classList.add(...[constants.css.controls.titleBar, constants.css.controls.control]);
		this.element.appendChild(document.createTextNode(this.text));
		let dragRegion = document.createElement('div');
		dragRegion.classList.add(constants.css.controls.titleBarDragRegion);
		this.element.appendChild(dragRegion);
		this.element.appendChild(new WindowControls({
			position: constants.controls.position.right
		}).element);
		this.window.show();
	}

	/**
 * @param {LintelBarCreateOptions} options 
 */
	static create(options = {}) {
		let head = document.querySelector('head');
		let materialCss = document.createElement('link');
		materialCss.rel = 'stylesheet';
		materialCss.href = path.join(__dirname, 'css/materialdesignicons.min.css');
		let customCss = document.createElement('link');
		customCss.rel = 'stylesheet';
		customCss.href = path.join(__dirname, 'css/index.css');
		head.appendChild(materialCss);
		head.appendChild(customCss);
		let body = document.querySelector('body');
		let lintelBar = new LintelBar(options);
		body.insertBefore(lintelBar.element, body.childNodes[0]);
	}
}

module.exports = { LintelBar };