const constants = require('../constants');
const { Button, CreateButtonOptions } = require('./button');
const { FontIcon } = require('./icons');

let _CreateTabOptions_showMenuIcon = new WeakMap();
let _CreateTabOptions_showCloseIcon = new WeakMap();
let _CreateTabOptions_autoHideActions = new WeakMap();
class CreateTabOptions extends CreateButtonOptions {
	/**
	 * @param {CreateTabOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.showMenuIcon = options.showMenuIcon;
		this.showCloseIcon = options.showCloseIcon;
	}

	/**
	 * @type {boolean}
	 */
	get showMenuIcon() {
		return _CreateTabOptions_showMenuIcon.get(this) ?? false;
	}

	set showMenuIcon(value) {
		_CreateTabOptions_showMenuIcon.set(this, typeof (value) == constants.types.boolean ? value : false);
	}

	/**
	 * @type {boolean}
	 */
	get showCloseIcon() {
		return _CreateTabOptions_showCloseIcon.get(this) ?? true;
	}

	set showCloseIcon(value) {
		_CreateTabOptions_showCloseIcon.set(this, typeof (value) == constants.types.boolean ? value : true);
	}

	/**
	 * @type {boolean}
	 */
	get autoHideActions() {
		return _CreateTabOptions_autoHideActions.get(this) ?? true;
	}

	set autoHideActions(value) {
		_CreateTabOptions_autoHideActions.set(this, typeof (value) == constants.types.boolean ? value : true);
	}

	static fromJSON(object) {
		if (object instanceof CreateTabOptions) {
			return object;
		} else {
			return new CreateTabOptions(object);
		}
	}
}

class Tab extends Button {
	/**
	 * @param {CreateTabOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateTabOptions.fromJSON(options);
		super(params);
		let tabIconContainer = document.createElement('div');
		tabIconContainer.classList.add(constants.css.controls.tabIconContainer);
		if (params.autoHideActions) {
			tabIconContainer.classList.add(constants.css.controlStates.hidden);
		}

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
			this.applyEventListeners(params);
		}
	}

	hideActions() {
		this.element.querySelector(`.${constants.css.controls.tabIconContainer}`).classList.add(constants.css.controlStates.hidden);
	}

	showActions() {
		this.element.querySelector(`.${constants.css.controls.tabIconContainer}`).classList.remove(constants.css.controlStates.hidden);
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(constants.css.controls.tab);
	}

	/**
	 * @param {CreateTabOptions} options 
	 */
	applyEventListeners(options) {
		if (options.autoHideActions) {
			this.element.addEventListener('mouseenter', () => this.showActions());
			this.element.addEventListener('mouseleave', () => this.hideActions());
		}
		super.applyEventListeners();
	}
}

module.exports = { Tab, CreateTabOptions };
