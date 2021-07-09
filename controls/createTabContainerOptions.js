const constants = require('../constants');
const { CreateContainerOptions } = require('./createContainerOptions');
const defaultFunction = () => { };
// eslint-disable-next-line no-unused-vars
const { CreateTabOptions } = require('./createTabOptions');
let _CreateTabContainerOptions_showAddButton = new WeakMap();
let _CreateTabContainerOptions_onTabAdd = new WeakMap();
let _CreateTabContainerOptions_onTabAdded = new WeakMap();
let _CreateTabContainerOptions_onTabRemove = new WeakMap();
let _CreateTabContainerOptions_onTabRemoved = new WeakMap();
let _CreateTabContainerOptions_onTabActivate = new WeakMap();
let _CreateTabContainerOptions_onTabActivated = new WeakMap();
class CreateTabContainerOptions extends CreateContainerOptions {
	/**
	 * @param {CreateTabContainerOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.showAddButton = options.showAddButton;
		this.onAdd = options.onTabAdd;
		this.onAdded = options.onTabAdded;
		this.onRemove = options.onTabRemove;
		this.onRemoved = options.onTabRemoved;
		this.onActivate = options.onTabActivate;
		this.onActivated = options.onTabActivated;
	}

	/**
	 * @type {Array<CreateTabOptions>}
	 */
	get items() {
		return super.items;
	}

	set items(value) {
		super.items = value;
	}

	get showAddButton() {
		return _CreateTabContainerOptions_showAddButton.get(this) ?? false;
	}

	set showAddButton(value) {
		_CreateTabContainerOptions_showAddButton.set(this, typeof (value) == 'boolean' ? value : false);
	}

	get onTabAdd() {
		return _CreateTabContainerOptions_onTabAdd.get(this);
	}

	set onTabAdd(value) {
		_CreateTabContainerOptions_onTabAdd.set(this, typeof (value) == constants.types.function ? value : defaultFunction);
	}

	get onTabAdded() {
		return _CreateTabContainerOptions_onTabAdded.get(this);
	}

	set onTabAdded(value) {
		_CreateTabContainerOptions_onTabAdded.set(this, typeof (value) == constants.types.function ? value : defaultFunction);
	}

	get onTabRemove() {
		return _CreateTabContainerOptions_onTabRemove.get(this);
	}

	set onTabRemove(value) {
		_CreateTabContainerOptions_onTabRemove.set(this, typeof (value) == constants.types.function ? value : defaultFunction);
	}

	get onTabRemoved() {
		return _CreateTabContainerOptions_onTabRemoved.get(this);
	}

	set onTabRemoved(value) {
		_CreateTabContainerOptions_onTabRemoved.set(this, typeof (value) == constants.types.function ? value : defaultFunction);
	}

	get onTabActivate() {
		return _CreateTabContainerOptions_onTabActivate.get(this);
	}

	set onTabActivate(value) {
		_CreateTabContainerOptions_onTabActivate.set(this, typeof (value) == constants.types.function ? value : defaultFunction);
	}

	get onTabActivated() {
		return _CreateTabContainerOptions_onTabActivated.get(this);
	}

	set onTabActivated(value) {
		_CreateTabContainerOptions_onTabActivated.set(this, typeof (value) == constants.types.function ? value : defaultFunction);
	}

	static fromJSON(object) {
		if (object instanceof CreateTabContainerOptions) {
			return object;
		} else {
			return new CreateTabContainerOptions(object);
		}
	}
}

module.exports = { CreateTabContainerOptions };