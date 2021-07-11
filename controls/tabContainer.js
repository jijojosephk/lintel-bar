const { Container } = require('./container');
// eslint-disable-next-line no-unused-vars
const { List } = require('./list');
const { CreateTabContainerOptions } = require('./createTabContainerOptions');
const { Tab } = require('./tab');
const { BackButton, ForwardButton } = require('./windowButtons');
const constants = require('../constants');
const defaultFunction = () => { };

let _TabContainer_onTabAdd = new WeakMap();
let _TabContainer_onTabAdded = new WeakMap();
let _TabContainer_onTabRemove = new WeakMap();
let _TabContainer_onTabRemoved = new WeakMap();
let _TabContainer_onTabActivate = new WeakMap();
let _TabContainer_onTabActivated = new WeakMap();
class TabContainer extends Container {
	/**
	 * @param {CreateTabContainerOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateTabContainerOptions.fromJSON(options);
		super(params);
		this.onAdd = options.onTabAdd;
		this.onAdded = options.onTabAdded;
		this.onRemove = options.onTabRemove;
		this.onRemoved = options.onTabRemoved;
		this.onActivate = options.onTabActivate;
		this.onActivated = options.onTabActivated;
		
		for (const tabOption of options.items) {
			tabOption.position = constants.controls.position.center;
			let tabButton = new Tab(tabOption);
			tabButton.element.addEventListener(constants.events.dom.click, (e) => tabClick(e, this));
			this.items.add(tabButton);
		}

		this.items.add(new BackButton({
			position: constants.controls.position.left
		}));

		this.items.add(new ForwardButton({
			position: constants.controls.position.right
		}));

		if (this.constructor.name == TabContainer.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	/**
	 * @type {List<Tab>}
	 */
	get items() {
		return super.items;
	}

	get onTabAdd() {
		return _TabContainer_onTabAdd.get(this);
	}

	set onTabAdd(value) {
		_TabContainer_onTabAdd.set(this, typeof (value) == constants.types.function ? value : defaultFunction);
	}

	get onTabAdded() {
		return _TabContainer_onTabAdded.get(this);
	}

	set onTabAdded(value) {
		_TabContainer_onTabAdded.set(this, typeof (value) == constants.types.function ? value : defaultFunction);
	}

	get onTabRemove() {
		return _TabContainer_onTabRemove.get(this);
	}

	set onTabRemove(value) {
		_TabContainer_onTabRemove.set(this, typeof (value) == constants.types.function ? value : defaultFunction);
	}

	get onTabRemoved() {
		return _TabContainer_onTabRemoved.get(this);
	}

	set onTabRemoved(value) {
		_TabContainer_onTabRemoved.set(this, typeof (value) == constants.types.function ? value : defaultFunction);
	}

	get onTabActivate() {
		return _TabContainer_onTabActivate.get(this);
	}

	set onTabActivate(value) {
		_TabContainer_onTabActivate.set(this, typeof (value) == constants.types.function ? value : defaultFunction);
	}

	get onTabActivated() {
		return _TabContainer_onTabActivated.get(this);
	}

	set onTabActivated(value) {
		_TabContainer_onTabActivated.set(this, typeof (value) == constants.types.function ? value : defaultFunction);
	}

	applyStyles() {
		super.applyStyles();
	}

	applyEventListeners() {
		super.applyEventListeners();
	}
}

/**
 * @param {MouseEvent} e 
 * @param {TabContainer} container
 */
function tabClick(e, container) {
	let role = e.target.getAttribute(constants.html.attributes.role);
	if (!role) return;

	let targetTab = role == constants.html.roles.tab ?
		e.target : getTabElement(e.target, role);

	container.items.items.forEach(i => {
		console.log(i, targetTab);
	});
}

/**
 * @param {HTMLElement} clickTarget 
 */
function getTabElement(clickTarget, role) {
	return role == constants.html.roles.iconMenu || role == constants.html.roles.iconClose ?
		clickTarget.parentElement.parentElement :
		null;
}

module.exports = { TabContainer };