/* eslint-disable no-unused-vars */
const { BrowserWindow } = require('electron');

let _LintelBarCreateOptions_enableMultiTabSupport = new WeakMap();
// eslint-disable-next-line no-unused-vars
class LintelBarCreateOptions {
	/**
	 * 
	 * @param {LintelBarCreateOptions} createOptions 
	 */
	constructor(createOptions = {}) {
		this.enableMultiTabSupport = createOptions.enableMultiTabSupport;
	}

	/**
	 * @type {boolean}
	 */
	get enableMultiTabSupport() {
		return _LintelBarCreateOptions_enableMultiTabSupport.get(this);
	}

	set enableMultiTabSupport(value) {
		_LintelBarCreateOptions_enableMultiTabSupport.set(this, typeof (value) == 'boolean' && value);
	}

}

let _LintelBar_window = new WeakMap();
class LintelBar {
	/**
	 * 
	 * @param {LintelBarCreateOptions} createOptions 
	 */
	create(createOptions) {
		_LintelBar_window.set(this, require('@electron/remote').getCurrentWindow());
		console.log(createOptions.enableMultiTabSupport);
		console.log(this.window.title);
	}

	/**
	 * @type {BrowserWindow}
	 */
	get window() {
		return _LintelBar_window.get(this);
	}
}
module.exports = new LintelBar();