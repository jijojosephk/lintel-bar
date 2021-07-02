// eslint-disable-next-line no-unused-vars
const { BrowserWindow } = require('electron');
const path = require('path');
const constants = require('../constants');

// Control definitions
let _Control_text = new WeakMap();
let _Control_title = new WeakMap();
let _Control_onClick = new WeakMap();
let _Control_element = new WeakMap();
class Control {
	/**
	 * Creates a new control
	 * @param {CreateControlOptions} options 
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
		return _Control_text.get(this) ?? '';
	}

	set text(value) {
		if (typeof (value) == 'string') {
			_Control_text.set(this, value);
		}
	}

	/**
	 * @type {string}
	 */
	get title() {
		return _Control_title.get(this) ?? '';
	}

	set title(value) {
		if (typeof (value) == 'string') {
			_Control_title.set(this, value);
		}
	}

	/**
	 * @type {(event:ControlEvent)=>void}
	 */
	get onClick() {
		return _Control_onClick.get(this);
	}

	set onClick(value) {
		if (typeof (value) == 'function') {
			_Control_onClick.set(this, value);
		}
	}

	/**
	 * @type {HTMLElement}
	 */
	get element() {
		return _Control_element.get(this);
	}

	set element(value) {
		if (this.element) {
			throw new Error(constants.messages.errors.elementOnlyOnce);
		} else {
			_Control_element.set(this, value);
		}
	}
}

let _CreateControlOptions_text = new WeakMap();
let _CreateControlOptions_title = new WeakMap();
let _CreateControlOptions_onClick = new WeakMap();
let _CreateControlOptions_theme = new WeakMap();
class CreateControlOptions {
	/**
	 * Creates a new CreateControlOptions instance
	 * @param {CreateControlOptions} options 
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
		return _CreateControlOptions_text.get(this);
	}

	set text(value) {
		if (typeof (value) == 'string') {
			_CreateControlOptions_text.set(this, value);
		}
	}

	/**
	 * @type {string}
	 */
	get title() {
		return _CreateControlOptions_title.get(this);
	}

	set title(value) {
		if (typeof (value) == 'string') {
			_CreateControlOptions_title.set(this, value);
		}
	}

	/**
	 * @type {(event:ControlEvent)=>void}
	 */
	get onClick() {
		return _CreateControlOptions_onClick.get(this);
	}

	set onClick(value) {
		if (typeof (value) == 'function') {
			_CreateControlOptions_onClick.set(this, value);
		}
	}

	/**
	 * @type {'default'|'teams'|'slack'|'github'}
	 */
	get theme() {
		return _CreateControlOptions_theme.get(this) ?? 'default';
	}

	set theme(value) {
		if (typeof (value) == 'string' && constants.themes.some(t => {
			return t == value;
		})) {
			_CreateControlOptions_theme.set(this, value);
		}
	}
}

class ControlEvent {
	constructor() {
	}
}

class ControlGroup extends Control {
	/**
	 * Creates a control group
	 * @param {CreateControlGroupOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

class CreateControlGroupOptions extends CreateControlOptions {
	/**
	 * 
	 * @param {CreateControlGroupOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

class Button extends Control {
	/**
	 * Creates a new button
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

class CloseButton extends Button {
	/**
	 * Creates a new close button
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

class ResizeButton extends Button {
	/**
	 * Creates a new resize button
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

class MinimizeButton extends Button {
	/**
	 * Creates a new minimize button
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

class WindowControls extends ControlGroup {
	/**
	 * Creates a new button
	 * @param {CreateControlGroupOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

let _LintelBarCreateOptions_template = new WeakMap();
// eslint-disable-next-line no-unused-vars
class LintelBarCreateOptions extends CreateControlGroupOptions {
	/**
	 * @param {LintelBarCreateOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}

	/**
	 * @type {'default'|'tabby'}
	 */
	get template() {
		return _LintelBarCreateOptions_template.get(this) ?? 'default';
	}

	set template(value) {
		if (typeof (value) == 'string' && value.trim()) {
			_LintelBarCreateOptions_template.set(this, value.trim());
		}
	}
}

let _LintelBar_window = new WeakMap();
class LintelBar extends ControlGroup {
	/**
	 * @param {LintelBarCreateOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.element = document.createElement('div');
		this.element.classList.add(constants.css.titleBar);
		this.element.appendChild(document.createTextNode(this.text));
		let dragRegion = document.createElement('div');
		dragRegion.classList.add(constants.css.titleBarDragRegion);
		this.element.appendChild(dragRegion);
		_LintelBar_window.set(this, require('@electron/remote').getCurrentWindow());
	}

	/**
	 * @type {BrowserWindow}
	 */
	get window() {
		return _LintelBar_window.get(this);
	}

	/**
 * @param {LintelBarCreateOptions} options 
 */
	static create(options = {}) {
		let head = document.querySelector('head');
		let css = document.createElement('link');
		css.rel = 'stylesheet';
		css.href = path.join(__dirname, 'index.css');
		head.appendChild(css);
		let body = document.querySelector('body');
		let lintelBar = new LintelBar(options);
		body.insertBefore(lintelBar.element, body.childNodes[0]);
	}
}

module.exports = {
	Control,
	CreateControlOptions,
	ControlEvent,
	ControlGroup,
	CreateControlGroupOptions,
	Button,
	CloseButton,
	ResizeButton,
	MinimizeButton,
	WindowControls,
	LintelBar
};