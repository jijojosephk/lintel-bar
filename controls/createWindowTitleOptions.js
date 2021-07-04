const { CreateControlOptions } = require('./createControlOptions');
class CreateWindowTitleOptions extends CreateControlOptions {
	/**
	 * @param {CreateWindowTitleOptions} options 
	 */
	constructor(options = {}) {
		super(options);
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
