const path = require('path');
const constants = require('../constants');
const { Element } = require('./element');
// eslint-disable-next-line no-unused-vars
const { CreateElementOptions } = require('./options/createElementOptions');

class CreateIconOptions extends CreateElementOptions {
	/**
	 * @param {CreateIconOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}

	static fromJSON(object) {
		if (object instanceof CreateIconOptions) {
			return object;
		} else {
			return new CreateIconOptions(object);
		}
	}
}

class Icon extends Element {
	/**
	 * @param {CreateIconOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

// eslint-disable-next-line no-unused-vars
class CreateFontIconOptions extends CreateIconOptions {
	/**
	 * @param {CreateFontIconOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}

	static fromJSON(object) {
		if (object instanceof CreateFontIconOptions) {
			return object;
		} else {
			return new CreateFontIconOptions(object);
		}
	}
}

// eslint-disable-next-line no-unused-vars
class FontIcon extends Icon {
	constructor() {
		super();
		this.element = document.createElement('i');
		this.element.classList.add(constants.css.fontIcons.primary);
	}
}

let _CreateImageIconOptions_file = new WeakMap();
// eslint-disable-next-line no-unused-vars
class CreateImageIconOptions extends CreateIconOptions {
	/**
	 * @param {CreateImageIconOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.file = options.file;
	}

	/**
	 * @type {string}
	 */
	get file() {
		return _CreateImageIconOptions_file.get(this) ?? '';
	}

	set file(value) {
		_CreateImageIconOptions_file.set(this, typeof (value) == constants.types.string && value.trim() ? value.trim() : '');
	}

	static fromJSON(object) {
		if (object instanceof CreateImageIconOptions) {
			return object;
		} else {
			return new CreateImageIconOptions(object);
		}
	}
}

let _ImageIcon_file = new WeakMap();
class ImageIcon extends Icon {
	/**
	 * @param {CreateImageIconOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.element = document.createElement('img');
		this.element.src = path.resolve(this.file);
	}

	/**
	 * @type {string}
	 */
	get file() {
		return _ImageIcon_file.get(this) ?? '';
	}

	set file(value) {
		_ImageIcon_file.set(this, typeof (value) == constants.types.string && value.trim() ? value.trim() : '');
	}
}

module.exports = {
	CreateIconOptions,
	Icon,
	CreateFontIconOptions,
	FontIcon,
	CreateImageIconOptions,
	ImageIcon
};