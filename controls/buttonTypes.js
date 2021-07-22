const constants = require('../constants');
const { Button } = require('./button');
const { CreateButtonOptions } = require('./options/createButtonOptions');
class CloseButton extends Button {
	/**
	 * Creates a new close button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
		if (this.constructor.name == CloseButton.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(constants.css.controlActions.close);
		this.icon.element.classList.add(constants.css.fontIcons.closeWindow);
		this.element.title = 'Close';
	}

	applyEventListeners() {
		super.applyEventListeners();
		this.element.addEventListener(constants.events.dom.click, () => this.window.close());
	}
}

function onMaximize() {
	if (this.window.isMaximized()) {
		this.window.restore();
	} else {
		this.window.maximize();
	}
}

function onWindowResize() {
	if (this.window.isMaximized()) {
		this.icon.element.classList.remove(constants.css.fontIcons.maximize);
		this.icon.element.classList.add(constants.css.fontIcons.restore);
		this.element.title = 'Restore';
	} else {
		this.icon.element.classList.add(constants.css.fontIcons.maximize);
		this.icon.element.classList.remove(constants.css.fontIcons.restore);
		this.element.title = 'Maximize';
	}
}

function onToggleWindowAlwaysOnTop() {
	this.window.setAlwaysOnTop(!this.window.isAlwaysOnTop());
}

class ResizeButton extends Button {
	/**
	 * Creates a new resize button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
		if (this.constructor.name == ResizeButton.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(this.window.isMaximized() ? constants.css.fontIcons.restore : constants.css.fontIcons.maximize);
		this.element.title = this.window.isMaximized() ? 'Restore' : 'Maximize';
	}

	applyEventListeners() {
		super.applyEventListeners();
		this.element.addEventListener(constants.events.dom.click, () => onMaximize.call(this));
		this.window.on(constants.events.dom.resize, () => onWindowResize.call(this));
	}
}

class MinimizeButton extends Button {
	/**
	 * Creates a new minimize button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
		if (this.constructor.name == MinimizeButton.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(constants.css.fontIcons.minimize);
		this.element.title = 'Minimize';
	}

	applyEventListeners() {
		super.applyEventListeners();
		this.element.addEventListener(constants.events.dom.click, () => this.window.minimize());
	}
}

// eslint-disable-next-line no-unused-vars
class AlwaysOnTopToggle extends Button {
	/**
	 * Creates a new minimize button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
		if (this.constructor.name == AlwaysOnTopToggle.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(constants.css.fontIcons.alwaysOnTopToggle);
		this.element.title = 'Always on top';
	}

	applyEventListeners() {
		super.applyEventListeners();
		this.element.addEventListener(constants.events.dom.click, () => onToggleWindowAlwaysOnTop.call(this));
	}
}

class BackButton extends Button {
	/**
	 * Creates a new minimize button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
		if (this.constructor.name == BackButton.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(constants.css.fontIcons.back);
		this.element.classList.add(constants.css.controlActions.back);
	}

	applyEventListeners() {
		super.applyEventListeners();
	}
}

class ForwardButton extends Button {
	/**
	 * Creates a new minimize button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
		if (this.constructor.name == ForwardButton.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(constants.css.fontIcons.forward);
		this.element.classList.add(constants.css.controlActions.forward);
	}

	applyEventListeners() {
		super.applyEventListeners();
	}
}

class AddButton extends Button {
	/**
	 * Creates a new minimize button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
		if (this.constructor.name == AddButton.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(constants.css.fontIcons.add);
		this.element.classList.add(constants.css.controlActions.add);
	}

	applyEventListeners() {
		super.applyEventListeners();
	}
}

module.exports = {
	CloseButton,
	ResizeButton,
	MinimizeButton,
	AlwaysOnTopToggle,
	BackButton,
	ForwardButton,
	AddButton
};