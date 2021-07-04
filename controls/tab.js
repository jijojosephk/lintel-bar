const { Control } = require('./control');
// eslint-disable-next-line no-unused-vars
const { CreateTabOptions } = require('./createTabOptions');
const { Button } = require('./button');
class Tab extends Control {
	/**
	 * @param {CreateTabOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateTabOptions.fromJSON(options);
		super(params);
		this.element = document.createElement('li');
		this.element.appendChild(new Button(params).element);
	}
}

module.exports = { Tab };
