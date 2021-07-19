let _ElementEvent_originalTarget = new WeakMap();
class ElementEvent {
	constructor() {
	}

	/**
	 * @type {HTMLElement}
	 */
	get originalTarget() {
		return _ElementEvent_originalTarget.get(this);
	}

	set originalTarget(value) {
		_ElementEvent_originalTarget.set(this, value);
	}
}

module.exports = { ElementEvent };