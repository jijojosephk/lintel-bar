const { ElementEvent } = require('./elementEvent');
// eslint-disable-next-line no-unused-vars
const { Control } = require('../control');
let _ControlEvent_control = new WeakMap();
class ControlEvent extends ElementEvent {
	constructor() {
		super();
	}

	/**
	 * @type {Control}
	 */
	get control() {
		return _ControlEvent_control.get(this);
	}

	set control(value) {
		_ControlEvent_control.set(this, value);
	}
}

module.exports = { ControlEvent };