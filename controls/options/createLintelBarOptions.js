const constants = require('../../constants');
let _CreateLintelBarOptions_template = new WeakMap();
class CreateLintelBarOptions {
	/**
	 * @param {CreateLintelBarOptions} options 
	 */
	constructor(options = {}) {
		this.template = options.template;
	}

	/**
	 * @type {'default'|'tabbed'}
	 */
	get template() {
		return _CreateLintelBarOptions_template.get(this);
	}

	set template(value) {
		if (typeof (value) == 'string') {
			_CreateLintelBarOptions_template.set(this, constants.templates[value]);
		}
	}

	static fromJSON(object) {
		if (object instanceof CreateLintelBarOptions) {
			return object;
		} else {
			return new CreateLintelBarOptions(object);
		}
	}
}

module.exports = { CreateLintelBarOptions };