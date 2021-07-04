const constants = require('../constants');
// eslint-disable-next-line no-unused-vars
const { Control } = require('./control');
let _CreateLintelBarOptions_template = new WeakMap();
let _CreateLintelBarOptions_controls = new WeakMap();
class CreateLintelBarOptions {
	/**
	 * @param {CreateLintelBarOptions} options 
	 */
	constructor(options = {}) {
		this.template = options.template;
		this.controls = options.controls;
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

	/**
	 * @type {Array<Control>}
	 */
	get controls() {
		return _CreateLintelBarOptions_controls.get(this);
	}

	set controls(value) {
		_CreateLintelBarOptions_controls.set(this, Array.isArray(value) ? value : []);
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