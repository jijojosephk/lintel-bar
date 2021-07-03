const { Container } = require('./container');
// eslint-disable-next-line no-unused-vars
const { CreateTabContainerOptions } = require('./createTabContainerOptions');
class TabContainer extends Container {
	/**
	 * @param {CreateTabContainerOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.element = document.createElement('ul');
	}
}

module.exports = { TabContainer };