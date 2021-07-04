const { Control } = require('./control');
// eslint-disable-next-line no-unused-vars
const { CreateWindowTitleOptions } = require('./createWindowTitleOptions');
class WindowTitle extends Control {
	/**
	 * 
	 * @param {CreateWindowTitleOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateWindowTitleOptions.fromJSON(options);
		super(params);
	}
}

module.exports = { WindowTitle };