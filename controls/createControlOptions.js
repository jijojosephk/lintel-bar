const constants = require('../constants');
const { CreateElementOptions } = require('./createElementOptions');
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
		this.position = options.position;
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
	
	static fromJSON(object) {
		if (object instanceof CreateControlOptions) {
			return object;
		} else {
			return new CreateControlOptions(object);
		}
	}
}

module.exports = { CreateControlOptions };