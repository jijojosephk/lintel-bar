const constants = require('../constants');
// eslint-disable-next-line no-unused-vars
const { CreateElementOptions } = require('./createElementOptions');

let _Element_text = new WeakMap();
let _Element_title = new WeakMap();
let _Element_onClick = new WeakMap();
let _Element_element = new WeakMap();
class Element {
	/**
	 * @param {CreateElementOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateElementOptions.fromJSON(options);
		this.text = params.text;
		this.title = params.title;
		this.onClick = params.onClick;
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

	/**
	 * @type {(event: ControlEvent)=>void}
	 */
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

	remove() {
		this.element.remove();
	}

	applyStyles() {
		// Template
	}

	applyEventListeners() {
		this.element.addEventListener(constants.events.dom.click, this.onClick);
	}
}

module.exports = { Element };