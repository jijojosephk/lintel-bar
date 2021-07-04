const { Control } = require('./control');
const { ControlList } = require('./controlList');
// eslint-disable-next-line no-unused-vars
const { CreateContainerOptions } = require('./createContainerOptions');
let _Container_controls = new WeakMap();
class Container extends Control {
	/**
	 * Creates a control group
	 * @param {CreateContainerOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateContainerOptions.fromJSON(options);
		super(params);
		_Container_controls.set(this, new ControlList(this));
	}

	/**
	 * @type {ControlList}
	 */
	get controls() {
		return _Container_controls.get(this);
	}
}

module.exports = { Container };