const constants = require('../../constants');
const { CreateElementOptions } = require('./createElementOptions');
let _CreateControlOptions_theme = new WeakMap();
let _CreateControlOptions_icon = new WeakMap();
let _CreateControlOptions_position = new WeakMap();
let _CreateControlOptions_allowDrag = new WeakMap();
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
		this.allowDrag = options.allowDrag;
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

	/**
	 * @type {boolean}
	 */
	get allowDrag() {
		return _CreateControlOptions_allowDrag.get(this) ?? false;
	}

	set allowDrag(value) {
		_CreateControlOptions_allowDrag.set(this, typeof (value) == constants.types.boolean ? value : false);
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