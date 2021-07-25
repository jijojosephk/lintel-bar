const constants = require('../constants');
const { Control, CreateControlOptions } = require('./control');

class CreateWindowTitleOptions extends CreateControlOptions {
	/**
	 * @param {CreateWindowTitleOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		if (typeof (options.allowDrag) != constants.types.boolean) {
			this.allowDrag = true;
		}
	}

	/**
	 * @type {'left'|'center'|'right'}
	 */
	get position() {
		return super.position ?? constants.controls.position.center;
	}

	set position(value) {
		super.position = value;
	}

	static fromJSON(object) {
		if (object instanceof CreateWindowTitleOptions) {
			return object;
		} else {
			return new CreateWindowTitleOptions(object);
		}
	}
}

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
		if (this.constructor.name == WindowTitle.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(constants.css.controls.title);
	}

	applyEventListeners() {
		super.applyEventListeners();
	}
}

module.exports = { WindowTitle, CreateWindowTitleOptions };