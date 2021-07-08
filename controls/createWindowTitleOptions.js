const constants = require('../constants');
const { CreateControlOptions } = require('./createControlOptions');
class CreateWindowTitleOptions extends CreateControlOptions {
	/**
	 * @param {CreateWindowTitleOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		if (typeof (options.allowDrag) != constants.types.boolean) {
			this.allowDrag = true;
		}
	}

	static fromJSON(object) {
		if (object instanceof CreateWindowTitleOptions) {
			return object;
		} else {
			return new CreateWindowTitleOptions(object);
		}
	}
}

module.exports = { CreateWindowTitleOptions };
