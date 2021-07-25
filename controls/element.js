const constants = require('../constants');

let _CreateElementOptions_text = new WeakMap();
let _CreateElementOptions_title = new WeakMap();
let _CreateElementOptions_onClick = new WeakMap();
let _CreateElementOptions_position = new WeakMap();
// eslint-disable-next-line no-unused-vars
class CreateElementOptions {
	/**
	 * @param {CreateElementOptions} options 
	 */
	constructor(options = {}) {
		this.text = options.text;
		this.title = options.title;
		this.onClick = options.onClick;
		this.position = options.position;
	}

	/**
	 * @type {string}
	 */
	get text() {
		return _CreateElementOptions_text.get(this) ?? '';
	}

	set text(value) {
		if (typeof (value) == constants.types.string) {
			_CreateElementOptions_text.set(this, value);
		}
	}

	/**
	 * @type {string}
	 */
	get title() {
		return _CreateElementOptions_title.get(this) ?? '';
	}

	set title(value) {
		if (typeof (value) == constants.types.string) {
			_CreateElementOptions_title.set(this, value);
		}
	}

	get onClick() {
		return _CreateElementOptions_onClick.get(this);
	}

	set onClick(value) {
		if (typeof (value) == constants.types.function) {
			_CreateElementOptions_onClick.set(this, value);
		}
	}

	/**
	 * @type {'left'|'center'|'right'}
	 */
	get position() {
		return _CreateElementOptions_position.get(this);
	}

	set position(value) {
		if (typeof (value) == constants.types.string) {
			_CreateElementOptions_position.set(this, constants.controls.position[value]);
		}
	}

	static fromJSON(object) {
		if (object instanceof CreateElementOptions) {
			return object;
		} else {
			return new CreateElementOptions(object);
		}
	}
}

let _Element_text = new WeakMap();
let _Element_title = new WeakMap();
let _Element_onClick = new WeakMap();
let _Element_element = new WeakMap();
let _Element_position = new WeakMap();
class Element {
	/**
	 * @param {CreateElementOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateElementOptions.fromJSON(options);
		this.text = params.text;
		this.title = params.title;
		this.onClick = params.onClick;
		this.position = params.position;
		if (this.constructor.name == Element.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	/**
	 * @type {string}
	 */
	get text() {
		return _Element_text.get(this) ?? '';
	}

	set text(value) {
		if (typeof (value) == constants.types.string) {
			_Element_text.set(this, value);
		}
	}

	/**
	 * @type {string}
	 */
	get title() {
		return _Element_title.get(this) ?? '';
	}

	set title(value) {
		if (typeof (value) == constants.types.string) {
			_Element_title.set(this, value);
		}
	}

	get onClick() {
		return _Element_onClick.get(this);
	}

	set onClick(value) {
		if (typeof (value) == constants.types.function) {
			_Element_onClick.set(this, value);
		}
	}

	/**
	 * @type {HTMLElement}
	 */
	get element() {
		return _Element_element.get(this);
	}

	set element(value) {
		if (this.element) {
			throw new Error(constants.messages.errors.elementOnlyOnce);
		} else {
			_Element_element.set(this, value);
		}
	}

	/**
	 * @type {'left'|'center'|'right'}
	 */
	get position() {
		return _Element_position.get(this);
	}

	set position(value) {
		if (typeof (value) == constants.types.string) {
			_Element_position.set(this, constants.controls.position[value]);
		}
	}

	remove() {
		this.element.remove();
	}

	applyStyles() {
		// Template
	}

	applyEventListeners() {
		if (this.onClick) {
			this.element.addEventListener(constants.events.dom.click, this.onClick);
		}
	}
}

class ElementEvent {
	constructor() {
	}
}


module.exports = { Element, CreateElementOptions, ElementEvent };