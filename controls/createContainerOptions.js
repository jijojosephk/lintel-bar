const { CreateControlOptions } = require('./createControlOptions');
class CreateContainerOptions extends CreateControlOptions {
	/**
	 * 
	 * @param {CreateContainerOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

module.exports = { CreateContainerOptions };