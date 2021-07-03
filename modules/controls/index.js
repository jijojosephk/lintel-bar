// eslint-disable-next-line no-unused-vars
const { BrowserWindow } = require('electron');
const path = require('path');
const constants = require('../constants');
let _window = require('@electron/remote').getCurrentWindow();

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
let _CreateControlOptions_position = new WeakMap();
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
		if (typeof (value) == constants.types.string && constants.themes.some(t => {
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
		if (typeof (value) == constants.types.object) {
			_CreateControlOptions_icon.set(this, value);
		}
	}

	/**
	 * @type {'left'|'center'|'right'}
	 */
	get position() {
		return _CreateControlOptions_position.get(this) ?? constants.controls.position.left;
	}

	set position(value) {
		if (typeof (value) == constants.types.string) {
			_CreateControlOptions_position.set(this, constants.controls.position[value]);
		}
	}
}

let _Control_theme = new WeakMap();
let _Control_icon = new WeakMap();
let _Control_position = new WeakMap();
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
		this.position = options.position;
	}

	/**
	 * @type {BrowserWindow}
	 */
	get window() {
		return _window;
	}

	/**
	 * @type {'default'|'teams'|'slack'|'github'}
	 */
	get theme() {
		return _Control_theme.get(this) ?? 'default';
	}

	set theme(value) {
		if (typeof (value) == constants.types.string && constants.themes.some(t => {
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
		if (typeof (value) == constants.types.object) {
			_Control_icon.set(this, value);
		}
	}

	/**
	 * @type {'left'|'center'|'right'}
	 */
	get position() {
		return _Control_position.get(this) ?? constants.controls.position.left;
	}

	set position(value) {
		console.log(value);
		if (typeof (value) == constants.types.string) {
			_Control_position.set(this, constants.controls.position[value]);
		}
	}
}

class ControlEvent {
	constructor() {
	}
}

let _ControlGroup_controls = new WeakMap();
class ControlGroup extends Control {
	/**
	 * Creates a control group
	 * @param {CreateControlGroupOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		_ControlGroup_controls.set(this, []);
	}

	/**
	 * @type {Array<Control>}
	 */
	get controls() {
		return _ControlGroup_controls.get(this);
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
		this.icon.element.classList.add(constants.css.controlIcons.primary);
		this.element = document.createElement('a');
		this.element.classList.add(...[constants.css.controls.control, constants.css.controls.button, constants.css.controlPosition[this.position]]);
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
		this.element.classList.add(constants.css.controlActions.close);
		this.icon.element.classList.add(constants.css.controlIcons.close);
		this.element.title = 'Close';
		this.element.addEventListener(constants.events.dom.click, () => _window.close());
	}
}

class ResizeButton extends Button {
	/**
	 * Creates a new resize button
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.icon.element.classList.add(_window.isMaximized() ? constants.css.controlIcons.restore : constants.css.controlIcons.maximize);
		this.element.title = _window.isMaximized() ? 'Restore' : 'Maximize';
		this.element.addEventListener(constants.events.dom.click, () => ResizeButton.prototype.onClick.call(this));
		_window.on(constants.events.dom.resize, () => ResizeButton.prototype.onResize.call(this));
	}
	onResize() {
		if (_window.isMaximized()) {
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
		if (_window.isMaximized()) {
			_window.restore();
		} else {
			_window.maximize();
		}
	}
}

class MinimizeButton extends Button {
	/**
	 * Creates a new minimize button
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.icon.element.classList.add(constants.css.controlIcons.minimize);
		this.element.addEventListener(constants.events.dom.click, () => _window.minimize());
		this.element.title = 'Minimize';
	}
}

class WindowControlsGroup extends ControlGroup {
	/**
	 * Creates a new button
	 * @param {CreateControlGroupOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.element = document.createElement('div');
		this.element.classList.add(...[constants.css.controls.control, constants.css.controlPosition[this.position]]);
		this.element.appendChild(new MinimizeButton().element);
		this.element.appendChild(new ResizeButton().element);
		this.element.appendChild(new CloseButton().element);
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

class LintelBar extends ControlGroup {
	/**
	 * @param {LintelBarCreateOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.element = document.createElement('div');
		this.element.classList.add(...[constants.css.controls.titleBar, constants.css.controls.control]);
		this.element.appendChild(document.createTextNode(this.text));
		let dragRegion = document.createElement('div');
		dragRegion.classList.add(constants.css.controls.titleBarDragRegion);
		this.element.appendChild(dragRegion);
		this.element.appendChild(new WindowControlsGroup({
			position: constants.controls.position.right
		}).element);
		this.element.appendChild(new WindowControlsGroup({
			position: constants.controls.position.right
		}).element);
	}

	/**
 * @param {LintelBarCreateOptions} options 
 */
	static create(options = {}) {
		let head = document.querySelector('head');
		let materialCss = document.createElement('link');
		materialCss.rel = 'stylesheet';
		materialCss.href = path.join(__dirname, 'materialdesignicons.min.css');
		let customCss = document.createElement('link');
		customCss.rel = 'stylesheet';
		customCss.href = path.join(__dirname, 'index.css');
		head.appendChild(materialCss);
		head.appendChild(customCss);
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
	WindowControlsGroup,
	LintelBar
};