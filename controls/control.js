const constants = require('../constants');
const { Element } = require('./element');
// eslint-disable-next-line no-unused-vars
const { BrowserWindow } = require('electron');
const { CreateControlOptions } = require('./createControlOptions');

let _window = require('@electron/remote').getCurrentWindow();
let _Control_theme = new WeakMap();
let _Control_icon = new WeakMap();
let _Control_position = new WeakMap();
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
}

module.exports = { Control };