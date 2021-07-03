const { CreateControlOptions } = require('./createControlOptions');
class CreateButtonOptions extends CreateControlOptions {
	/**
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

module.exports = { CreateButtonOptions };