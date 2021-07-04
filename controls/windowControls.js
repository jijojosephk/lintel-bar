const constants = require('../constants');
const { Container } = require('./container');
const { MinimizeButton, ResizeButton, CloseButton } = require('./windowButtons');
// eslint-disable-next-line no-unused-vars
const { CreateWindowControlsOptions } = require('./createWindowControlsOptions');
class WindowControls extends Container {
	/**
	 * Creates a new button
	 * @param {CreateWindowControlsOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.element = document.createElement('div');
		this.element.classList.add(...[constants.css.controls.control, constants.css.controlPosition[this.position]]);
		this.element.appendChild(new MinimizeButton().element);
		this.element.appendChild(new ResizeButton().element);
		this.element.appendChild(new CloseButton().element);
	}

	get items() {
		return super.controls;
	}

	set items(value) {
		super.controls = value;
	}
}

module.exports = { WindowControls };