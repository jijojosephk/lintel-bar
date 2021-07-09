const constants = require('../constants');

/* eslint-disable no-unused-vars */
let _List_items = new WeakMap();
let _List_onAdded = new WeakMap();
let _List_onRemoved = new WeakMap();
/**
 * @template T
 */
class List {
	constructor() {
		// This is a generic implementation
		_List_items.set(this, []);
		_List_onAdded.set(this, () => { });
		_List_onRemoved.set(this, () => { });
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
		this.onAdded(item);
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

		this.onRemoved(item);
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
			this.onRemoved(item);
			item = items.pop();
		}
	}

	/**
	 * @type {(item:T)=>void}
	 */
	get onAdded() {
		return _List_onAdded.get(this);
	}

	set onAdded(value) {
		if (typeof (value) == constants.types.function) {
			_List_onAdded.set(this, value);
		}
	}

	/**
	 * @type {(item:T)=>void}
	 */
	get onRemoved() {
		return _List_onRemoved.get(this);
	}

	set onRemoved(value) {
		if (typeof (value) == constants.types.function) {
			_List_onRemoved.set(this, value);
		}
	}
}

module.exports = { List };