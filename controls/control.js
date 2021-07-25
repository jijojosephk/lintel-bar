const constants = require('../constants');
const { Element, CreateElementOptions, ElementEvent } = require('./element');
// eslint-disable-next-line no-unused-vars
const { BrowserWindow } = require('electron');

let _CreateControlOptions_theme = new WeakMap();
let _CreateControlOptions_icon = new WeakMap();
let _CreateControlOptions_allowDrag = new WeakMap();
let _CreateControlOptions_enabled = new WeakMap();
let _CreateControlOptions_active = new WeakMap();
let _CreateControlOptions_data = new WeakMap();
class CreateControlOptions extends CreateElementOptions {
	/**
	 * Creates a new CreateControlOptions instance
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.theme = options.theme;
		this.icon = options.icon;
		this.allowDrag = options.allowDrag;
		this.enabled = options.enabled;
		this.active = options.active;
		this.data = options.data;
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
	 * @type {boolean}
	 */
	get allowDrag() {
		return _CreateControlOptions_allowDrag.get(this) ?? false;
	}

	set allowDrag(value) {
		_CreateControlOptions_allowDrag.set(this, typeof (value) == constants.types.boolean ? value : false);
	}

	get enabled() {
		return _CreateControlOptions_enabled.get(this) ?? true;
	}

	set enabled(value) {
		_CreateControlOptions_enabled.set(this, typeof (value) == constants.types.boolean ? value : true);
	}

	get active() {
		return _CreateControlOptions_active.get(this) ?? false;
	}

	set active(value) {
		_CreateControlOptions_active.set(this, typeof (value) == constants.types.boolean ? value : false);
	}

	get data() {
		return _CreateControlOptions_data.get(this);
	}

	set data(value) {
		_CreateControlOptions_data.set(this, value);
	}

	static fromJSON(object) {
		if (object instanceof CreateControlOptions) {
			return object;
		} else {
			return new CreateControlOptions(object);
		}
	}
}

let _window = require('@electron/remote').getCurrentWindow();
let _Control_theme = new WeakMap();
let _Control_icon = new WeakMap();
let _Control_allowDrag = new WeakMap();
let _Control_enabled = new WeakMap();
let _Control_active = new WeakMap();
let _Control_data = new WeakMap();
class Control extends Element {
	/**
	 * Creates a new control
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateControlOptions.fromJSON(options);
		super(params);
		this.text = params.text;
		this.title = params.title;
		this.onClick = params.onClick;
		this.allowDrag = params.allowDrag;
		this.enabled = params.enabled;
		this.active = params.active;
		this.data = params.data;
		if (this.constructor.name == Control.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
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

	get allowDrag() {
		return _Control_allowDrag.get(this) ?? false;
	}

	set allowDrag(value) {
		_Control_allowDrag.set(this, typeof (value) == constants.types.boolean ? value : false);
	}

	get enabled() {
		return _Control_enabled.get(this) ?? true;
	}

	set enabled(value) {
		_Control_enabled.set(this, typeof (value) == constants.types.boolean ? value : true);
		if (this.element) {
			if (this.enabled) {
				this.element.style.pointerEvents = 'auto';
				this.element.classList.remove(constants.css.controlStates.disabled);
			} else {
				this.element.style.pointerEvents = 'none';
				this.element.classList.add(constants.css.controlStates.disabled);
			}
		}
	}

	get active() {
		return _Control_active.get(this) ?? false;
	}

	set active(value) {
		_Control_active.set(this, typeof (value) == constants.types.boolean ? value : false);
		if (this.element) {
			if (this.active) {
				this.element.classList.add(constants.css.controlStates.active);
			} else {
				this.element.classList.remove(constants.css.controlStates.active);
			}
		}
	}

	get data() {
		return _Control_data.get(this);
	}

	set data(value) {
		_Control_data.set(this, value);
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(...[constants.css.controls.control]);

		if (!this.enabled) {
			this.element.style.pointerEvents = 'none';
			this.element.classList.add(constants.css.controlStates.disabled);
		}

		if (this.active) {
			this.element.classList.add(constants.css.controlStates.active);
		}

		if (this.allowDrag) {
			this.element.classList.add(constants.css.dragable);
		}
	}

	applyEventListeners() {
		super.applyEventListeners();
	}
}

let _ControlEvent_control = new WeakMap();
class ControlEvent extends ElementEvent {
	constructor() {
		super();
	}

	/**
	 * @type {Control}
	 */
	get control() {
		return _ControlEvent_control.get(this);
	}

	set control(value) {
		_ControlEvent_control.set(this, value);
	}
}

module.exports = { Control, CreateControlOptions, ControlEvent };