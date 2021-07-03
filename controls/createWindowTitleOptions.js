const { CreateControlOptions } = require('./createControlOptions');
class CreateWindowTitleOptions extends CreateControlOptions {
	/**
	 * @param {CreateWindowTitleOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

module.exports = { CreateWindowTitleOptions };
