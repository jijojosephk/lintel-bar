const constants = require('../constants');
const { Control } = require('./control');
const { FontIcon } = require('./icons');
// eslint-disable-next-line no-unused-vars
const { CreateButtonOptions } = require('./options/createButtonOptions');
class Button extends Control {
	/**
	 * Creates a new button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
		this.icon = new FontIcon();
		this.element = document.createElement('a');
		this.element.appendChild(this.icon.element);
		this.element.appendChild(document.createTextNode(this.text));
		if (this.constructor.name == Button.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(...[constants.css.controls.button]);
	}

	applyEventListeners() {
		super.applyEventListeners();
	}
}

module.exports = { Button };