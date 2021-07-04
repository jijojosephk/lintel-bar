// eslint-disable-next-line no-unused-vars
const { Control } = require('./control');
const { List } = require('./list');

class ControlList extends List {
	constructor() {
		super();
	}

	/**
	 * @param {number} index 
	 * @returns {Control}
	 */
	get(index) {
		return super.get(index);
	}

	/**
	 * @type {Array<Control>}
	 */
	get controls() {
		return super.items;
	}

	/**
	 * @param {Control} control 
	 * @returns {Control}
	 */
	add(control) {
		return super.add(control);
	}

	/**
 * @param {number} index
 * @returns {Control}
 */
	remove(index) {
		return super.remove(index);
	}

	/**
	 * @param {(control:Control)=>} callback 
	 */
	removeAll(callback) {
		super.removeAll((item) => {
			if (typeof (callback) == 'function') {
				callback(item);
			}
		});
	}
}

module.exports = { ControlList };