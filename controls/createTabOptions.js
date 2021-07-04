const { CreateControlOptions } = require('./createControlOptions');
class CreateTabOptions extends CreateControlOptions {
	/**
	 * @param {CreateTabOptions} options 
	 */
	constructor(options = {}) {
		super(options);
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