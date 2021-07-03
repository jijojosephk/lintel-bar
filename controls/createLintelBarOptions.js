const constants = require('../constants');
const { CreateContainerOptions } = require('./createContainerOptions');
let _CreateLintelBarOptions_template = new WeakMap();
class CreateLintelBarOptions extends CreateContainerOptions {
	/**
	 * @param {CreateLintelBarOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}

	/**
	 * @type {'default'|'tabbed'}
	 */
	get template() {
		return _CreateLintelBarOptions_template.get(this) ?? constants.templates.default;
	}

	set template(value) {
		if (typeof (value) == 'string') {
			_CreateLintelBarOptions_template.set(this, constants.templates[value]);
		}
	}
}

module.exports = { CreateLintelBarOptions };