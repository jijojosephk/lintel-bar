const constants = require('../constants');
const { Container } = require('./container');
const { MinimizeButton, ResizeButton, CloseButton } = require('./windowButtons');
// eslint-disable-next-line no-unused-vars
const { CreateContainerOptions } = require('./createContainerOptions');
class WindowControls extends Container {
	/**
	 * Creates a new button
	 * @param {CreateContainerOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.element = document.createElement('div');
		this.element.classList.add(...[constants.css.controls.control, constants.css.controlPosition[this.position]]);
		this.element.appendChild(new MinimizeButton().element);
		this.element.appendChild(new ResizeButton().element);
		this.element.appendChild(new CloseButton().element);
	}
}

module.exports = { WindowControls };