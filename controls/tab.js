// eslint-disable-next-line no-unused-vars
const { CreateTabOptions } = require('./createTabOptions');
const { Button } = require('./button');
const constants = require('../constants');
class Tab extends Button {
	/**
	 * @param {CreateTabOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateTabOptions.fromJSON(options);
		super(params);
		this.applyStyles();
		this.applyEventHandlers();
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(constants.css.controls.tab);
	}

	applyEventHandlers() {
	}
}

module.exports = { Tab };
