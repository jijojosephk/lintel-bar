// eslint-disable-next-line no-unused-vars
const { Control } = require('./control');
// eslint-disable-next-line no-unused-vars
const { CreateControlOptions } = require('./createControlOptions');
let _CreateContainerOptions_items = new WeakMap();
class CreateContainerOptions {
	/**
	 * @param {CreateContainerOptions} options 
	 */
	constructor(options = {}) {
		this.items = options.items;
	}

	/**
	 * @type {Array<CreateControlOptions>}
	 */
	get items() {
		return _CreateContainerOptions_items.get(this);
	}

	set items(value) {
		_CreateContainerOptions_items.set(this, Array.isArray(value) ? value : []);
	}
}

module.exports = { CreateContainerOptions };