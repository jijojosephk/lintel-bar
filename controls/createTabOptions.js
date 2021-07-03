const { CreateControlOptions } = require('./createControlOptions');
class CreateTabOptions extends CreateControlOptions {
	/**
	 * @param {CreateTabOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

module.exports = { CreateTabOptions };