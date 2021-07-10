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
		let closeIcon = new FontIcon();
		closeIcon.element.classList.add(...['mdi', 'mdi-close-circle-outline']);
		let burgerIcon = new FontIcon();
		burgerIcon.element.classList.add(...['mdi', 'mdi-dots-vertical-circle-outline']);
		this.element.appendChild(burgerIcon.element);
		this.element.appendChild(closeIcon.element);
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
