const { Control } = require('./control');
// eslint-disable-next-line no-unused-vars
const { CreateControlGroupOptions } = require('./createContainerOptions');
let _Container_controls = new WeakMap();
class Container extends Control {
	/**
	 * Creates a control group
	 * @param {CreateControlGroupOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		_Container_controls.set(this, []);
	}

	/**
	 * @type {Array<Control>}
	 */
	get controls() {
		return _Container_controls.get(this);
	}
}

module.exports = { Container };