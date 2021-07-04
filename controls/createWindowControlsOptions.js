const { CreateContainerOptions } = require('./createContainerOptions');
// eslint-disable-next-line no-unused-vars
const { CreateButtonOptions } = require('./createButtonOptions');
class CreateWindowControlsOptions extends CreateContainerOptions {
	/**
	 * @param {CreateWindowControlsOptions} options 
	 */
	constructor(options) {
		super(options);
	}

	/**
	 * @type {Array<CreateButtonOptions>}
	 */
	get items() {
		return super.items;
	}

	set items(value) {
		super.items = value;
	}
}

module.exports = { CreateWindowControlsOptions };