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
		this.element.classList.add(constants.css.controlActions.close);
		this.icon.element.classList.add(constants.css.controlIcons.close);
		this.element.title = 'Close';
		this.element.addEventListener(constants.events.dom.click, () => this.window.close());
	}
}

class ResizeButton extends Button {
	/**
	 * Creates a new resize button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
		this.icon.element.classList.add(this.window.isMaximized() ? constants.css.controlIcons.restore : constants.css.controlIcons.maximize);
		this.element.title = this.window.isMaximized() ? 'Restore' : 'Maximize';
		this.element.addEventListener(constants.events.dom.click, () => ResizeButton.prototype.onClick.call(this));
		this.window.on(constants.events.dom.resize, () => ResizeButton.prototype.onResize.call(this));
	}
	onResize() {
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

	onClick() {
		if (this.window.isMaximized()) {
			this.window.restore();
		} else {
			this.window.maximize();
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
		this.icon.element.classList.add(constants.css.controlIcons.minimize);
		this.element.addEventListener(constants.events.dom.click, () => this.window.minimize());
		this.element.title = 'Minimize';
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
		this.icon.element.classList.add(constants.css.controlIcons.alwaysOnTopToggle);
		this.element.addEventListener(constants.events.dom.click, () => this.toggle());
		this.element.title = 'Always on top';
	}

	toggle() {
		this.window.setAlwaysOnTop(!this.window.isAlwaysOnTop());
	}
}

module.exports = { CloseButton, ResizeButton, MinimizeButton, AlwaysOnTopToggle };