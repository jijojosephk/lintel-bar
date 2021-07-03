const { Control } = require('./control');
// eslint-disable-next-line no-unused-vars
const { CreateTabOptions } = require('./createTabOptions');
class Tab extends Control {
	/**
	 * @param {CreateTabOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

module.exports = { Tab };
