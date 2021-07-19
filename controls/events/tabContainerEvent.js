const constants = require('../../constants');
const { ControlEvent } = require('./controlEvent');

let _TabContainerEvent_index = new WeakMap();
class TabContainerEvent extends ControlEvent {
	constructor() {
		super();
	}

	get index() {
		return _TabContainerEvent_index.get(this) ?? -1;
	}

	set index(value) {
		_TabContainerEvent_index.set(this, typeof (value) == constants.types.number && value > -1 ? value : -1);
	}
}

module.exports = { TabContainerEvent };