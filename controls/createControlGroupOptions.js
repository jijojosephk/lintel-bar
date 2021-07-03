const { CreateControlOptions } = require('./createControlOptions');
class CreateControlGroupOptions extends CreateControlOptions {
	/**
	 * 
	 * @param {CreateControlGroupOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

module.exports = { CreateControlGroupOptions };