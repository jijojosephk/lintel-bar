const { Control } = require('./control');
// eslint-disable-next-line no-unused-vars
const { CreatWindowTitleOptions } = require('./createWindowTitleOptions');
class WindowTitle extends Control {
	/**
	 * 
	 * @param {CreatWindowTitleOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

module.exports = { WindowTitle };