const { Container } = require('./container');
// eslint-disable-next-line no-unused-vars
const { CreateTabContainerOptions } = require('./createTabContainerOptions');
let _TabContainer_tabs = new WeakMap();
class TabContainer extends Container {
	/**
	 * @param {CreateTabContainerOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.element = document.createElement('ul');
	}

	/**
	 * @type {ControlList}
	 */
	get tabs() {
		return _TabContainer_tabs.get(this);
	}
}

module.exports = { TabContainer };