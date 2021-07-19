// eslint-disable-next-line no-unused-vars
const { CreateControlOptions } = require('./createControlOptions');
let _CreateContainerOptions_items = new WeakMap();
class CreateContainerOptions extends CreateControlOptions {
	/**
	 * @param {CreateContainerOptions} options 
	 */
	constructor(options = {}) {
		super(options);
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

	static fromJSON(object) {
		if (object instanceof CreateContainerOptions) {
			return object;
		} else {
			return new CreateContainerOptions(object);
		}
	}
}

module.exports = { CreateContainerOptions };