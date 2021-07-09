const constants = require('../constants');
const { Control } = require('./control');
const { FontIcon } = require('./icons');
// eslint-disable-next-line no-unused-vars
const { CreateButtonOptions } = require('./createButtonOptions');
class Button extends Control {
	/**
	 * Creates a new button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
		this.icon = new FontIcon();
		this.icon.element.classList.add(constants.css.controlIcons.primary);
		this.element = document.createElement('a');
		this.element.appendChild(this.icon.element);
		this.element.appendChild(document.createTextNode(this.text));
		this.applyStyles();
		this.applyEventHandlers();
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(...[constants.css.controls.button]);
	}

	applyEventHandlers() {
		if (this.onClick && this.__proto__ == 'Button') {
			this.element.addEventListener(constants.events.dom.click, () => this.onClick.call(this));
		}
	}
}

module.exports = { Button };