const constants = require('../../constants');
const { CreateControlOptions } = require('./createControlOptions');

let _CreateTabOptions_showMenuIcon = new WeakMap();
let _CreateTabOptions_showCloseIcon = new WeakMap();
class CreateTabOptions extends CreateControlOptions {
	/**
	 * @param {CreateTabOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.showMenuIcon = options.showMenuIcon;
		this.showCloseIcon = options.showCloseIcon;
	}

	/**
	 * @type {boolean}
	 */
	get showMenuIcon() {
		return _CreateTabOptions_showMenuIcon.get(this) ?? false;
	}

	set showMenuIcon(value) {
		_CreateTabOptions_showMenuIcon.set(this, typeof (value) == constants.types.boolean ? value : false);
	}

	/**
	 * @type {boolean}
	 */
	get showCloseIcon() {
		return _CreateTabOptions_showCloseIcon.get(this) ?? true;
	}

	set showCloseIcon(value) {
		_CreateTabOptions_showCloseIcon.set(this, typeof (value) == constants.types.boolean ? value : true);
	}

	static fromJSON(object) {
		if (object instanceof CreateTabOptions) {
			return object;
		} else {
			return new CreateTabOptions(object);
		}
	}
}

module.exports = { CreateTabOptions };