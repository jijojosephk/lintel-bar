const constants = require('../constants');
const { Element, CreateElementOptions } = require('./element');

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
		const iconOptions = CreateIconOptions.fromJSON(options);
		super(iconOptions);
	}

	applyStyles() {
		this.element.classList.add(constants.css.controls.icon);
	}

	applyEventListeners() {
		if (this.onClick) {
			this.element.addEventListener(constants.events.dom.click, this.onClick);
		}
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
	/**
	 * @param {CreateFontIconOptions} options 
	 */
	constructor(options = {}) {
		const fontIconOptions = CreateFontIconOptions.fromJSON(options);
		super(fontIconOptions);
		this.element = document.createElement('i');
		if (this.constructor.name == FontIcon.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(...[constants.css.controls.fontIcon, constants.css.fontIcons.primary]);
	}

	applyEventListeners() {
		super.applyEventListeners();
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
		const imageIconOptions = CreateImageIconOptions.fromJSON(options);
		super(imageIconOptions);
		this.element = document.createElement('div');
		if (this.constructor.name == ImageIcon.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
		this.file = imageIconOptions.file;
	}

	/**
	 * @type {string}
	 */
	get file() {
		return _ImageIcon_file.get(this) ?? '';
	}

	set file(value) {
		_ImageIcon_file.set(this, typeof (value) == constants.types.string && value.trim() ? value.trim() : '');
		this.element.style.background = `url(${this.file})`;
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(constants.css.controls.imageIcon);
	}

	applyEventListeners() {
		super.applyEventListeners();
	}
}

// eslint-disable-next-line no-unused-vars
class CreateAppIconOptions extends CreateImageIconOptions {
	/**
	 * @param {CreateAppIconOptions} options 
	 */
	constructor(options) {
		super(options);
	}

	/**
	 * @type {'left'|'center'|'right'}
	 */
	get position() {
		return super.position ?? constants.controls.position.left;
	}

	set position(value) {
		super.position = value;
	}

	static fromJSON(object) {
		if (object instanceof CreateAppIconOptions) {
			return object;
		} else {
			return new CreateAppIconOptions(object);
		}
	}
}

class AppIcon extends ImageIcon {
	/**
	 * @param {CreateAppIconOptions} options 
	 */
	constructor(options) {
		const appIconOptions = CreateAppIconOptions.fromJSON(options);
		super(appIconOptions);
		if (this.constructor.name == AppIcon.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(constants.css.controls.appIcon);
	}

	applyEventListeners() {
		super.applyEventListeners();
	}
}

module.exports = {
	CreateIconOptions,
	Icon,
	CreateFontIconOptions,
	FontIcon,
	CreateImageIconOptions,
	ImageIcon,
	CreateAppIconOptions,
	AppIcon
};