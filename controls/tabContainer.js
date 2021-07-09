const { Container } = require('./container');
// eslint-disable-next-line no-unused-vars
const { List } = require('./list');
// eslint-disable-next-line no-unused-vars
const { CreateTabContainerOptions } = require('./createTabContainerOptions');
// eslint-disable-next-line no-unused-vars
const { Tab } = require('./tab');
const { BackButton, ForwardButton } = require('./windowButtons');
const constants = require('../constants');

class TabContainer extends Container {
	/**
	 * @param {CreateTabContainerOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateTabContainerOptions.fromJSON(options);
		super(params);
		for (const tab of options.items) {
			tab.position = constants.controls.position.center;
			this.tabs.add(new Tab(tab));
		}

		this.tabs.add(new BackButton({
			position: constants.controls.position.left,
			onClick: () => {
				console.log(this);
			}
		}));

		this.tabs.add(new ForwardButton({
			position: constants.controls.position.right
		}));

		this.applyStyles();
	}

	/**
	 * @type {List<Tab>}
	 */
	get tabs() {
		return super.controls;
	}

	applyStyles() {
		super.applyStyles();
	}
}

module.exports = { TabContainer };