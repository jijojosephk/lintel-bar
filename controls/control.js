const constants = require('../constants');
const { Element } = require('./element');
// eslint-disable-next-line no-unused-vars
const { BrowserWindow } = require('electron');
const { CreateControlOptions } = require('./options/createControlOptions');

let _window = require('@electron/remote').getCurrentWindow();
let _Control_theme = new WeakMap();
let _Control_icon = new WeakMap();
let _Control_position = new WeakMap();
let _Control_allowDrag = new WeakMap();
let _Control_enabled = new WeakMap();
let _Control_active = new WeakMap();
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
		this.position = params.position;
		this.allowDrag = params.allowDrag;
		this.enabled = params.enabled;
		this.active = params.active;
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

	/**
	 * @type {'left'|'center'|'right'}
	 */
	get position() {
		return _Control_position.get(this) ?? constants.controls.position.left;
	}

	set position(value) {
		if (typeof (value) == constants.types.string) {
			_Control_position.set(this, constants.controls.position[value]);
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
				this.element.removeAttribute(constants.html.attributes.disabled);
			} else {
				this.element.setAttribute(constants.html.attributes.disabled, true);
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

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(...[constants.css.controls.control]);

		if (!this.enabled) {
			this.element.setAttribute(constants.html.attributes.disabled, constants.html.attributes.disabled);
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

module.exports = { Control };