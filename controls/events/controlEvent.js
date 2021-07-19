const { ElementEvent } = require('./elementEvent');
let _ControlEvent_control = new WeakMap();
class ControlEvent extends ElementEvent {
	constructor() {
		super();
	}

	get control() {
		return _ControlEvent_control.get(this);
	}

	set control(value) {
		_ControlEvent_control.set(this, value);
	}
}

module.exports = { ControlEvent };