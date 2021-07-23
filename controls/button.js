const constants = require('../constants');
const { Control, CreateControlOptions } = require('./control');
const { FontIcon } = require('./icons');
class CreateButtonOptions extends CreateControlOptions {
	/**
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}

	static fromJSON(object) {
		if (object instanceof CreateButtonOptions) {
			return object;
		} else {
			return new CreateButtonOptions(object);
		}
	}
}

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

module.exports = { Button, CreateButtonOptions };