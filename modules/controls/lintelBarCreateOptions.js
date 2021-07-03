const constants = require('../constants');
const { CreateControlGroupOptions } = require('./createControlGroupOptions');
let _LintelBarCreateOptions_template = new WeakMap();
class LintelBarCreateOptions extends CreateControlGroupOptions {
	/**
	 * @param {LintelBarCreateOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}

	/**
	 * @type {'default'|'tabbed'}
	 */
	get template() {
		return _LintelBarCreateOptions_template.get(this) ?? constants.templates.default;
	}

	set template(value) {
		if (typeof (value) == 'string') {
			_LintelBarCreateOptions_template.set(this, constants.templates[value]);
		}
	}
}

module.exports = { LintelBarCreateOptions };