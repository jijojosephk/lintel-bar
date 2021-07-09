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
		this.applyStyles();
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(constants.css.controls.title);
	}

	applyEventHandlers() {
		if (this.__proto__ == 'WindowTitle' && this.onClick) {
			this.element.addEventListener(constants.events.dom.click, () => this.onClick.call(this));
		}
	}
}

module.exports = { WindowTitle };