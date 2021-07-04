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
		this.element.classList.add(...[constants.css.controls.control, constants.css.controls.button, constants.css.controlPosition[this.position]]);
		this.element.appendChild(this.icon.element);
		this.element.appendChild(document.createTextNode(this.text));
		this.element.addEventListener(constants.events.dom.click, this.onClick);
	}
}

module.exports = { Button };