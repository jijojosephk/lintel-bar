const constants = require('../constants');
const { Control } = require('./control');
const { FontIcon } = require('./icons');
// eslint-disable-next-line no-unused-vars
const { CreateControlOptions } = require('./createControlOptions');
class Button extends Control {
	/**
	 * Creates a new button
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		super(options);
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