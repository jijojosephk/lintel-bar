const constants = require('../constants');
const { Button } = require('./button');
const { CreateButtonOptions } = require('./createButtonOptions');
class CloseButton extends Button {
	/**
	 * Creates a new close button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
		this.applyStyles();
		this.applyEventHandlers();
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(constants.css.controlActions.close);
		this.icon.element.classList.add(constants.css.controlIcons.close);
		this.element.title = 'Close';
	}

	applyEventHandlers() {
		this.element.addEventListener(constants.events.dom.click, () => this.window.close());
		if (this.onClick && this.__proto__ == 'CloseButton') {
			this.element.addEventListener(constants.events.dom.click, () => this.onClick.call(this));
		}
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
		this.icon.element.classList.remove(constants.css.controlIcons.maximize);
		this.icon.element.classList.add(constants.css.controlIcons.restore);
		this.element.title = 'Restore';
	} else {
		this.icon.element.classList.add(constants.css.controlIcons.maximize);
		this.icon.element.classList.remove(constants.css.controlIcons.restore);
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
		this.applyStyles();
		this.applyEventHandlers();
	}

	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(this.window.isMaximized() ? constants.css.controlIcons.restore : constants.css.controlIcons.maximize);
		this.element.title = this.window.isMaximized() ? 'Restore' : 'Maximize';
	}

	applyEventHandlers() {
		this.element.addEventListener(constants.events.dom.click, () => onMaximize.call(this));
		this.window.on(constants.events.dom.resize, () => onWindowResize.call(this));
		if (this.onClick && this.__proto__ == 'ResizeButton') {
			this.element.addEventListener(constants.events.dom.click, () => this.onClick.call(this));
		}
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
		this.applyStyles();
		this.applyEventHandlers();
	}

	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(constants.css.controlIcons.minimize);
		this.element.title = 'Minimize';
	}

	applyEventHandlers() {
		this.element.addEventListener(constants.events.dom.click, () => this.window.minimize());
		if (this.onClick && this.__proto__ == 'MinimizeButton') {
			this.element.addEventListener(constants.events.dom.click, () => this.onClick.call(this));
		}
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
		this.applyStyles();
		this.applyEventHandlers();
	}

	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(constants.css.controlIcons.alwaysOnTopToggle);
		this.element.title = 'Always on top';
	}

	applyEventHandlers() {
		this.element.addEventListener(constants.events.dom.click, () => onToggleWindowAlwaysOnTop.call(this));
		if (this.onClick && this.__proto__ == 'AlwaysOnTopToggle') {
			this.element.addEventListener(constants.events.dom.click, () => this.onClick.call(this));
		}
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
		this.applyStyles();
		this.applyEventHandlers();
	}

	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(constants.css.controlIcons.back);
		this.element.classList.add(constants.css.controlActions.back);
	}

	applyEventHandlers() {
		if (this.onClick && this.__proto__ == 'BackButton') {
			this.element.addEventListener(constants.events.dom.click, () => this.onClick.call(this));
		}
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
	}

	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(constants.css.controlIcons.forward);
		this.element.classList.add(constants.css.controlActions.forward);
	}

	applyEventHandlers() {
		if (this.onClick && this.__proto__ == 'ForwardButton') {
			this.element.addEventListener(constants.events.dom.click, () => this.onClick.call(this));
		}
	}
}

module.exports = {
	CloseButton,
	ResizeButton,
	MinimizeButton,
	AlwaysOnTopToggle,
	BackButton,
	ForwardButton
};