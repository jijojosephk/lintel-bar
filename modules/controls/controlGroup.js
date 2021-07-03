const { Control } = require('./control');
// eslint-disable-next-line no-unused-vars
const { CreateControlGroupOptions } = require('./createControlGroupOptions');
let _ControlGroup_controls = new WeakMap();
class ControlGroup extends Control {
	/**
	 * Creates a control group
	 * @param {CreateControlGroupOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		_ControlGroup_controls.set(this, []);
	}

	/**
	 * @type {Array<Control>}
	 */
	get controls() {
		return _ControlGroup_controls.get(this);
	}
}

module.exports = { ControlGroup };