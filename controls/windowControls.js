const { Container, CreateContainerOptions } = require('./container');
const { MinimizeButton, ResizeButton, CloseButton, AlwaysOnTopToggle } = require('./buttonTypes');
const constants = require('../constants');

let _CreateWindowControlsOptions_minimize = new WeakMap();
let _CreateWindowControlsOptions_maximize = new WeakMap();
let _CreateWindowControlsOptions_close = new WeakMap();
let _CreateWindowControlsOptions_alwaysOnTopToggle = new WeakMap();
class CreateWindowControlsOptions extends CreateContainerOptions {
	/**
	 * @param {CreateWindowControlsOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.minimize = options.minimize;
		this.maximize = options.maximize;
		this.close = options.close;
		this.alwaysOnTopToggle = options.alwaysOnTopToggle;
	}

	/**
	 * @type {boolean}
	 */
	get minimize() {
		return _CreateWindowControlsOptions_minimize.get(this);
	}

	set minimize(value) {
		_CreateWindowControlsOptions_minimize.set(this, typeof (value) == 'boolean' ? value : true);
	}

	/**
	 * @type {boolean}
	 */
	get maximize() {
		return _CreateWindowControlsOptions_maximize.get(this);
	}

	set maximize(value) {
		_CreateWindowControlsOptions_maximize.set(this, typeof (value) == 'boolean' ? value : true);
	}

	/**
	 * @type {boolean}
	 */
	get close() {
		return _CreateWindowControlsOptions_close.get(this);
	}

	set close(value) {
		_CreateWindowControlsOptions_close.set(this, typeof (value) == 'boolean' ? value : true);
	}

	/**
	 * @type {boolean}
	 */
	get alwaysOnTopToggle() {
		return _CreateWindowControlsOptions_alwaysOnTopToggle.get(this);
	}

	set alwaysOnTopToggle(value) {
		_CreateWindowControlsOptions_alwaysOnTopToggle.set(this, typeof (value) == 'boolean' ? value : false);
	}

	/**
	 * @type {'left'|'center'|'right'}
	 */
	get position() {
		return super.position ?? constants.controls.position.right;
	}

	set position(value) {
		super.position = value;
	}

	static fromJSON(object) {
		if (object instanceof CreateWindowControlsOptions) {
			return object;
		} else {
			return new CreateWindowControlsOptions(object);
		}
	}
}

class WindowControls extends Container {
	/**
	 * Creates a new button
	 * @param {CreateWindowControlsOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateWindowControlsOptions.fromJSON(options);
		super(params);

		if (params.alwaysOnTopToggle) {
			this.items.add(new AlwaysOnTopToggle());
		}

		if (params.minimize) {
			this.items.add(new MinimizeButton());
		}

		if (params.maximize) {
			this.items.add(new ResizeButton());
		}

		if (params.close) {
			this.items.add(new CloseButton());
		}

		if (this.constructor.name == WindowControls.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}
}

module.exports = { WindowControls, CreateWindowControlsOptions };