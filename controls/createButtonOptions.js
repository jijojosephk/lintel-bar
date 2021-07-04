const { CreateControlOptions } = require('./createControlOptions');
class CreateButtonOptions extends CreateControlOptions {
	/**
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}

	static fromJSON(object) {
		if (object instanceof CreateButtonOptions) {
			return object;
		} else {
			return new CreateButtonOptions(object);
		}
	}
}

module.exports = { CreateButtonOptions };