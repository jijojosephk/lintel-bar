/* eslint-disable no-unused-vars */
let _List_items = new WeakMap();
/**
 * @template T
 */
class List {
	constructor() {
		// This is a generic implementation
		_List_items.set(this, []);
	}

	/**
	 * 
	 * @param {number} index 
	 * @returns {T}
	 */
	get(index) {
		return _List_items.get(this)[index];
	}

	/**
	 * @type {Array<T>}
	 */
	get items() {
		return Object.freeze(_List_items.get(this).slice());
	}

	/**
	 * @param {T} item 
	 * @returns {T}
	 */
	add(item) {
		/**
		 * @type {Array<T>}
		 */
		let items = _List_items.get(this);
		items.push(item);
		return item;
	}

	/**
	 * 
	 * @param {number} index 
	 * @returns {T}
	 */
	remove(index) {
		/**
		 * @type {Array<T>}
		 */
		let items = _List_items.get(this);
		let item = items[index];
		if (item) {
			items.splice(index, 1);
		}

		return item;
	}

	/**
	 * @param {(item:T)=>} callback
	 */
	removeAll(callback) {
		/**
		 * @type {Array<T>}
		 */
		let items = _List_items.get(this);
		let item = items.pop();
		while (item) {
			if (typeof (callback) == 'function') {
				callback(item);
			}
			item = items.pop();
		}
	}
}

module.exports = { List };