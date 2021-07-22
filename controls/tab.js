// eslint-disable-next-line no-unused-vars
const { CreateTabOptions } = require('./options/createTabOptions');
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
		if (params.showMenuIcon) {
			let tabIconMenu = new FontIcon();
			tabIconMenu.element.setAttribute(constants.html.attributes.role, constants.html.roles.iconMenu);
			tabIconMenu.element.classList.add(...[constants.css.fontIcons.menu, constants.css.controlActions.menu]);
			tabIconContainer.appendChild(tabIconMenu.element);
		}

		// Close Icon
		if (params.showCloseIcon) {
			let tabIconClose = new FontIcon();
			tabIconClose.element.setAttribute(constants.html.attributes.role, constants.html.roles.iconClose);
			tabIconClose.element.classList.add(...[constants.css.fontIcons.close, constants.css.controlActions.close]);
			tabIconContainer.appendChild(tabIconClose.element);
		}

		this.element.appendChild(tabIconContainer);
		this.element.setAttribute(constants.html.attributes.role, constants.html.roles.tab);
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
