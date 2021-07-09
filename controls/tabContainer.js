const { Container } = require('./container');
// eslint-disable-next-line no-unused-vars
const { List } = require('./list');
// eslint-disable-next-line no-unused-vars
const { CreateTabContainerOptions } = require('./createTabContainerOptions');
const { CreateButtonOptions } = require('./createButtonOptions');
// eslint-disable-next-line no-unused-vars
const { Button } = require('./button');
const { Tab } = require('./tab');
const constants = require('../constants');

class BackButton extends Button {
	/**
	 * Creates a new minimize button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
	}
	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(constants.css.controlIcons.back);
		this.element.classList.add(constants.css.controlActions.back);
	}
}

class ForwardButton extends Button {
	/**
	 * Creates a new minimize button
	 * @param {CreateButtonOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateButtonOptions.fromJSON(options);
		super(params);
	}
	applyStyles() {
		super.applyStyles();
		this.icon.element.classList.add(constants.css.controlIcons.forward);
		this.element.classList.add(constants.css.controlActions.forward);
	}
}

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
			position: constants.controls.position.left
		}));

		this.tabs.add(new ForwardButton({
			position: constants.controls.position.right
		}));
	}

	/**
	 * @type {List<Tab>}
	 */
	get tabs() {
		return super.controls;
	}
}

module.exports = { TabContainer };