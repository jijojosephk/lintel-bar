// eslint-disable-next-line no-unused-vars
const { Control } = require('./control');
let _ControlList_list = new WeakMap();
class ControlList {
	/**
	 * @param {Container} container 
	 */
	constructor() {
		_ControlList_list.set(this, []);
	}

	/**
	 * @param {Control} control 
	 */
	add(control) {
		/**
		 * @type {Array<Control>}
		 */
		let controls = _ControlList_list.get(this);
		controls.push(control);
	}

	/**
 * @param {number} index 
 */
	remove(index) {
		/**
		 * @type {Array<Control>}
		 */
		let controls = _ControlList_list.get(this);
		let item = controls[index];
		if (item) {
			item.remove();
			controls.splice(index, 1);
		}
	}

	removeAll() {
		/**
		 * @type {Array<Control>}
		 */
		let controls = _ControlList_list.get(this);
		let item = controls.pop();
		while (item) {
			item.remove();
			item = controls.pop();
		}
	}
}

module.exports = { ControlList };