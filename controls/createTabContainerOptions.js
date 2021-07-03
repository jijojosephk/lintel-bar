const { CreateContainerOptions } = require('./createContainerOptions');
let _CreateTabContainerOptions_showAddButton = new WeakMap();
let _CreateTabContainerOptions_tabs = new WeakMap();
class CreateTabContainerOptions extends CreateContainerOptions {
	/**
	 * @param {CreateTabContainerOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.enableAdd = options.showAddButton;
	}

	/**
	 * @type {Array<Control>}
	 */
	get tabs() {
		return _CreateTabContainerOptions_tabs.get(this);
	}

	get showAddButton() {
		return _CreateTabContainerOptions_showAddButton.get(this) ?? false;
	}

	set showAddButton(value) {
		_CreateTabContainerOptions_showAddButton.set(this, typeof (value) == 'boolean' ? value : false);
	}
}

module.exports = { CreateTabContainerOptions };