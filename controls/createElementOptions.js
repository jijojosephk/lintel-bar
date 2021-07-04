const constants = require('../constants');

let _CreateElementOptions_text = new WeakMap();
let _CreateElementOptions_title = new WeakMap();
let _CreateElementOptions_onClick = new WeakMap();
// eslint-disable-next-line no-unused-vars
class CreateElementOptions {
	/**
	 * @param {CreateElementOptions} options 
	 */
	constructor(options = {}) {
		this.text = options.text;
		this.title = options.title;
		this.onClick = options.onClick;
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

	/**
	 * @type {(event: ControlEvent)=>void}
	 */
	get onClick() {
		return _CreateElementOptions_onClick.get(this);
	}

	set onClick(value) {
		if (typeof (value) == constants.types.function) {
			_CreateElementOptions_onClick.set(this, value);
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

module.exports = { CreateElementOptions };