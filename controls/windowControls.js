const constants = require('../constants');
const { Container } = require('./container');
const { MinimizeButton, ResizeButton, CloseButton, AlwaysOnTopToggle } = require('./windowButtons');
// eslint-disable-next-line no-unused-vars
const { CreateWindowControlsOptions } = require('./createWindowControlsOptions');
class WindowControls extends Container {
	/**
	 * Creates a new button
	 * @param {CreateWindowControlsOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateWindowControlsOptions.fromJSON(options);
		super(params);
		this.element = document.createElement('div');
		this.element.classList.add(...[constants.css.controls.control, constants.css.controlPosition[this.position]]);

		if (params.alwaysOnTopToggle) {
			this.element.appendChild(new AlwaysOnTopToggle().element);
		}

		if (params.minimize) {
			this.element.appendChild(new MinimizeButton().element);
		}

		if (params.maximize) {
			this.element.appendChild(new ResizeButton().element);
		}

		if (params.close) {
			this.element.appendChild(new CloseButton().element);
		}
	}

	get items() {
		return super.controls;
	}

	set items(value) {
		super.controls = value;
	}
}

module.exports = { WindowControls };