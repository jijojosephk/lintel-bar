const { CreateControlOptions } = require('./createControlOptions');
let _CreateWindowControlsOptions_minimize = new WeakMap();
let _CreateWindowControlsOptions_maximize = new WeakMap();
let _CreateWindowControlsOptions_close = new WeakMap();
let _CreateWindowControlsOptions_alwaysOnTopToggle = new WeakMap();
class CreateWindowControlsOptions extends CreateControlOptions {
	/**
	 * @param {CreateWindowControlsOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.minimize = options.minimize;
		this.maximize = options.maximize;
		this.close = options.close;
		this.alwaysOnTopToggle = options.alwaysOnTopToggle;
		this.position = options.position ? options.position : 'right';
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

	static fromJSON(object) {
		if (object instanceof CreateWindowControlsOptions) {
			return object;
		} else {
			return new CreateWindowControlsOptions(object);
		}
	}
}

module.exports = { CreateWindowControlsOptions };
