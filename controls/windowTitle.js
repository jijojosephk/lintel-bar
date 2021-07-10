const constants = require('../constants');
const { Control } = require('./control');
// eslint-disable-next-line no-unused-vars
const { CreateWindowTitleOptions } = require('./createWindowTitleOptions');
class WindowTitle extends Control {
	/**
	 * 
	 * @param {CreateWindowTitleOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateWindowTitleOptions.fromJSON(options);
		super(params);
		this.element = document.createElement('div');
		this.element.appendChild(document.createTextNode(this.text));
		if (this.constructor.name == WindowTitle.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(constants.css.controls.title);
	}

	applyEventListeners() {
		super.applyEventListeners();
	}
}

module.exports = { WindowTitle };