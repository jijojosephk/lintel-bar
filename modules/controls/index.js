// eslint-disable-next-line no-unused-vars
const { BrowserWindow } = require('electron');
const path = require('path');
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
		if (typeof (value) == 'string') {
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
		if (typeof (value) == 'string') {
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
		if (typeof (value) == 'function') {
			_CreateElementOptions_onClick.set(this, value);
		}
	}
}

let _Element_text = new WeakMap();
let _Element_title = new WeakMap();
let _Element_onClick = new WeakMap();
let _Element_element = new WeakMap();
class Element {
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
		return _Element_text.get(this) ?? '';
	}

	set text(value) {
		if (typeof (value) == 'string') {
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
		if (typeof (value) == 'string') {
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
		if (typeof (value) == 'function') {
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
}

class Icon extends Element {
	/**
	 * @param {CreateElementOptions} options 
	 */
	constructor(options) {
		super(options);
	}
}

// eslint-disable-next-line no-unused-vars
class FontIcon extends Icon {
	constructor() {
		super();
		this.element = document.createElement('i');
	}
}

// eslint-disable-next-line no-unused-vars
class ImageIcon extends Icon {
	constructor() {
		super();
		this.element = document.createElement('img');
	}
}

let _CreateControlOptions_theme = new WeakMap();
let _CreateControlOptions_icon = new WeakMap();
class CreateControlOptions extends CreateElementOptions {
	/**
	 * Creates a new CreateControlOptions instance
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.theme = options.theme;
		this.icon = options.icon;
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

	/**
	 * @type {Icon}
	 */
	get icon() {
		return _CreateControlOptions_icon.get(this);
	}

	set icon(value) {
		if (typeof (value) == 'object') {
			_CreateControlOptions_icon.set(this, value);
		}
	}
}

let _Control_theme = new WeakMap();
let _Control_icon = new WeakMap();
class Control extends Element {
	/**
	 * Creates a new control
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.text = options.text;
		this.title = options.title;
		this.onClick = options.onClick;
	}

	/**
	 * @type {'default'|'teams'|'slack'|'github'}
	 */
	get theme() {
		return _Control_theme.get(this) ?? 'default';
	}

	set theme(value) {
		if (typeof (value) == 'string' && constants.themes.some(t => {
			return t == value;
		})) {
			_Control_theme.set(this, value);
		}
	}

	/**
	 * @type {Icon}
	 */
	get icon() {
		return _Control_icon.get(this);
	}

	set icon(value) {
		if (typeof (value) == 'object') {
			_Control_icon.set(this, value);
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

// eslint-disable-next-line no-unused-vars
class CreateButtonControlOptions extends CreateControlOptions {
	constructor(options) {
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
		this.icon = new FontIcon();
		this.element = document.createElement('a');
		this.element.appendChild(this.icon.element);
		this.element.appendChild(document.createTextNode(this.text));
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
		this.element.appendChild(new Button().element);
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