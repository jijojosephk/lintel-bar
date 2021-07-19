const constants = require('../../constants');
const { CreateControlOptions } = require('./createControlOptions');

let _CreateTabOptions_showMenuIcon = new WeakMap();
class CreateTabOptions extends CreateControlOptions {
	/**
	 * @param {CreateTabOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.showMenuIcon = options.showMenuIcon;
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

	static fromJSON(object) {
		if (object instanceof CreateTabOptions) {
			return object;
		} else {
			return new CreateTabOptions(object);
		}
	}
}

module.exports = { CreateTabOptions };