const { ControlEvent } = require('./controlEvent');
const constants = require('../../constants');
// eslint-disable-next-line no-unused-vars
const { Container } = require('../container');

let _ContainerEvent_index = new WeakMap();
let _ContainerEvent_container = new WeakMap();
class ContainerEvent extends ControlEvent {
	constructor() {
		super();
	}

	/**
	 * @type {number}
	 */
	get index() {
		return _ContainerEvent_index.get(this) ?? -1;
	}

	set index(value) {
		_ContainerEvent_index.set(this, typeof (value) == constants.types.number && value > -1 ? value : -1);
	}

	/**
	 * @type {Container}
	 */
	get container() {
		return _ContainerEvent_container.get(this);
	}

	set container(value) {
		_ContainerEvent_container.set(this, value);
	}
}

module.exports = { ContainerEvent };