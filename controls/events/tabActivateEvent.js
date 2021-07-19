const { ControlEvent } = require('./controlEvent');

class TabActivateEvent extends ControlEvent {
	constructor() {
		super();
	}
}

module.exports = { TabActivateEvent };