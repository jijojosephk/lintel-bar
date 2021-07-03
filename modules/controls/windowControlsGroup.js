const constants = require('../constants');
const { ControlGroup } = require('./controlGroup');
const { MinimizeButton, ResizeButton, CloseButton } = require('./windowButtons');
class WindowControlsGroup extends ControlGroup {
	/**
	 * Creates a new button
	 * @param {CreateControlGroupOptions} options 
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

module.exports = { WindowControlsGroup };