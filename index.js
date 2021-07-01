/* eslint-disable no-unused-vars */
const { BrowserWindow } = require('electron');
const { ControlGroup, CreateControlGroupOptions } = require('./modules/controls');

class LintelBarCreateOptions extends CreateControlGroupOptions {
	/**
	 * @param {LintelBarCreateOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

let _LintelBar_window = new WeakMap();
class LintelBar extends ControlGroup {
	/**
	 * @param {LintelBarCreateOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.element = document.createElement('div');
		this.element.appendChild(document.createTextNode(this.text));
		_LintelBar_window.set(this, require('@electron/remote').getCurrentWindow());
	}

	/**
	 * @type {BrowserWindow}
	 */
	get window() {
		return _LintelBar_window.get(this);
	}
}

/**
 * @param {LintelBarCreateOptions} options 
 */
function create(options = {}) {
	let body = document.querySelector('body');
	let lintelBar = new LintelBar(options);
	body.insertBefore(lintelBar.element, body.childNodes[0]);
}

module.exports = { create };