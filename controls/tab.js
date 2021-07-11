// eslint-disable-next-line no-unused-vars
const { CreateTabOptions } = require('./createTabOptions');
const { Button } = require('./button');
const constants = require('../constants');
const { FontIcon } = require('./icons');
class Tab extends Button {
	/**
	 * @param {CreateTabOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateTabOptions.fromJSON(options);
		super(params);
		let tabIconContainer = document.createElement('div');
		tabIconContainer.classList.add(constants.css.controls.tabIconContainer);
		
		// Menu Icon
		if (options.showMenuIcon) {
			let tabIconMenu = new FontIcon();
			tabIconMenu.element.classList.add(...[constants.css.fontIcons.menu, constants.css.controlActions.menu]);
			tabIconContainer.appendChild(tabIconMenu.element);
		}

		// Close Icon
		let tabIconClose = new FontIcon();
		tabIconClose.element.classList.add(...[constants.css.fontIcons.close, constants.css.controlActions.close]);
		tabIconContainer.appendChild(tabIconClose.element);
		
		this.element.appendChild(tabIconContainer);
		if (this.constructor.name == Tab.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(constants.css.controls.tab);
	}

	applyEventListeners() {
		super.applyEventListeners();
	}
}

module.exports = { Tab };
