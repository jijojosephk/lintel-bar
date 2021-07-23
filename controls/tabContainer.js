const constants = require('../constants');
const { List } = require('./list');
const { Container, CreateContainerOptions, ContainerEvent } = require('./container');
const { Tab, CreateTabOptions } = require('./tab');
const { BackButton, ForwardButton, AddButton } = require('./buttonTypes');
// eslint-disable-next-line no-unused-vars
const defaultEventHandler = (item) => { };
// eslint-disable-next-line no-unused-vars
const defaultCancellableEventHandler = (item, callback) => { callback(false); };
// eslint-disable-next-line no-unused-vars
const defaultCancellableAddEventHandler = (event, callback) => { callback(event.control); };

class TabContainerScope {
	/**
 * @param {MouseEvent} e 
 * @param {TabContainer} container
 */
	static tabClick(e, container) {
		let role = e.target.getAttribute(constants.html.attributes.role);
		// Tab controls have 3 different roles.
		// Tab, Close Icon, Menu Icon
		if (!role) return;
		let tabElement = TabContainerScope.getTabElement(e.target, role);
		let tabControlInfo = TabContainerScope.getTabControlInfo(container, tabElement);
		tabEventHandlers.click[role](tabControlInfo);
	}

	/**
	 * @param {TabControlInfo} tabControlInfo 
	 */
	static tabActivateActionHandler(tabControlInfo) {
		let event = TabContainerScope.createTabContainerEvent(tabControlInfo);
		tabControlInfo.container.onTabActivate(event, cancel => {
			if (!cancel) {
				event.control.active = true;
				const tabs = TabContainerScope.getTabs(tabControlInfo.container);
				if (tabControlInfo.container.selectedIndex > -1) {
					const previousTab = tabs.get(tabControlInfo.container.selectedIndex);
					if (previousTab) {
						previousTab.active = false;
					}
				}
				_TabContainer_selectedIndex.set(tabControlInfo.container, event.index);
				tabs.get(event.index).active = true;
				tabControlInfo.container.onTabActivated(event);
			}
		});
	}

	/**
	 * @param {TabControlInfo} tabControlInfo 
	 */
	static tabCloseActionHandler(tabControlInfo) {
		let event = TabContainerScope.createTabContainerEvent(tabControlInfo);
		const tabs = TabContainerScope.getTabs(tabControlInfo.container);
		tabControlInfo.container.onTabClose(event, cancel => {
			if (!cancel) {
				// To do
				tabs.remove(tabControlInfo.index);
				tabControlInfo.container.onTabClosed(event);
			}
		});
	}

	/**
	 * @param {TabControlInfo} tabControlInfo 
	 * @returns {TabContainerEvent}
	 */
	static createTabContainerEvent(tabControlInfo) {
		let event = new TabContainerEvent();
		event.control = tabControlInfo.tab;
		event.index = tabControlInfo.index;
		event.container = tabControlInfo.container;
		return event;
	}

	/**
	 * @param {TabContainer} container 
	 * @param {HTMLElement} tabElement
	 */
	static getTabControlInfo(container, tabElement) {
		const tabs = TabContainerScope.getTabs(container);
		for (var i = 0; i < tabs.items.length; i++) {
			if (tabElement == tabs.items[i].element) {
				return new TabControlInfo({
					index: i,
					tab: tabs.get(i),
					container: container
				});
			}
		}
	}

	/**
	 * @param {HTMLElement} clickTarget 
	 */
	static getTabElement(clickTarget, role) {
		return role == constants.html.roles.tab ?
			clickTarget :
			role == constants.html.roles.iconMenu || role == constants.html.roles.iconClose ?
				clickTarget.parentElement.parentElement :
				null;
	}

	/**
	 * @param {TabContainer} container 
	 * @returns {List<Tab>}
	 */
	static getTabs(container) {
		return _TabContainer_tabs.get(container);
	}
}

const tabEventHandlers = {
	click: {
		tab: TabContainerScope.tabActivateActionHandler,
		iconclose: TabContainerScope.tabCloseActionHandler
	}
};

// TabContainer
let _TabContainer_tabs = new WeakMap();
let _TabContainer_onTabAdd = new WeakMap();
let _TabContainer_onTabAdded = new WeakMap();
let _TabContainer_onTabRemove = new WeakMap();
let _TabContainer_onTabRemoved = new WeakMap();
let _TabContainer_onTabActivate = new WeakMap();
let _TabContainer_onTabActivated = new WeakMap();
let _TabContainer_selectedIndex = new WeakMap();
class TabContainer extends Container {
	/**
	 * @param {CreateTabContainerOptions} options 
	 */
	constructor(options = {}) {
		const tabContainerOptions = CreateTabContainerOptions.fromJSON(options);
		super(tabContainerOptions);
		this.onTabAdd = tabContainerOptions.onTabAdd;
		this.onTabAdded = tabContainerOptions.onTabAdded;
		this.onTabClose = tabContainerOptions.onTabClose;
		this.onTabClosed = tabContainerOptions.onTabClosed;
		this.onTabActivate = tabContainerOptions.onTabActivate;
		this.onTabActivated = tabContainerOptions.onTabActivated;
		const tabs = new List();
		_TabContainer_tabs.set(this, tabs);
		for (const tabOption of tabContainerOptions.items) {
			tabOption.position = constants.controls.position.center;
			let tab = new Tab(tabOption);
			tab.element.addEventListener(constants.events.dom.click, (e) => TabContainerScope.tabClick(e, this));
			this.items.add(tab);
			tabs.add(tab);
		}

		this.items.add(new AddButton({
			position: constants.controls.position.left,
			onClick: () => this.addTab()
		}));

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
	 * @type {(event: TabContainerEvent, callback:(response:boolean|CreateTabOptions)=>void)=>void}
	 */
	get onTabAdd() {
		return _TabContainer_onTabAdd.get(this);
	}

	set onTabAdd(value) {
		_TabContainer_onTabAdd.set(this, typeof (value) == constants.types.function ? value : null);
	}

	/**
	 * @type {(event: TabContainerEvent)=>void}
	 */
	get onTabAdded() {
		return _TabContainer_onTabAdded.get(this);
	}

	set onTabAdded(value) {
		_TabContainer_onTabAdded.set(this, typeof (value) == constants.types.function ? value : null);
	}

	/**
	 * @type {(event: TabContainerEvent, callback:(cancel:boolean)=>void)=>void}
	 */
	get onTabClose() {
		return _TabContainer_onTabRemove.get(this);
	}

	set onTabClose(value) {
		_TabContainer_onTabRemove.set(this, typeof (value) == constants.types.function ? value : null);
	}

	/**
	 * @type {(event: TabContainerEvent)=>void}
	 */
	get onTabClosed() {
		return _TabContainer_onTabRemoved.get(this);
	}

	set onTabClosed(value) {
		_TabContainer_onTabRemoved.set(this, typeof (value) == constants.types.function ? value : null);
	}

	/**
	 * @type {(event: TabContainerEvent, callback:(cancel:boolean)=>void)=>void}
	 */
	get onTabActivate() {
		return _TabContainer_onTabActivate.get(this);
	}

	set onTabActivate(value) {
		_TabContainer_onTabActivate.set(this, typeof (value) == constants.types.function ? value : null);
	}

	/**
	 * @type {(event: TabContainerEvent)=>void}
	 */
	get onTabActivated() {
		return _TabContainer_onTabActivated.get(this);
	}

	set onTabActivated(value) {
		_TabContainer_onTabActivated.set(this, typeof (value) == constants.types.function ? value : null);
	}

	get selectedIndex() {
		return _TabContainer_selectedIndex.get(this) ?? -1;
	}

	set selectedIndex(value) {
		const tabs = TabContainerScope.getTabs(this);
		if (typeof (value) == constants.types.number && value > -1 && value < tabs.items.length) {
			TabContainerScope.tabActivateActionHandler(new TabControlInfo({
				index: value,
				tab: tabs.get(value),
				container: this
			}));
		}
	}

	applyStyles() {
		super.applyStyles();
	}

	applyEventListeners() {
		super.applyEventListeners();
		const tabs = TabContainerScope.getTabs(this);
		tabs.onRemoved = (tab, index) => {
			this.items.remove(index);
			tab.element.remove();
			let event = new TabContainerEvent();
			event.control = tab;
			event.index = index;
			this.onTabClosed(event);
		};
	}

	/**
	 * 
	 * @param {CreateTabOptions} tab 
	 */
	addTab(options = {}) {
		const tabs = TabContainerScope.getTabs(this);
		options.position = constants.controls.position.center;
		const tabOptions = CreateTabOptions.fromJSON(options);
		tabOptions.text = `Session ${tabs.items.length + 1}`;
		let event1 = TabContainerScope.createTabContainerEvent({
			index: tabs.items.length,
			tab: tabOptions,
			container: this
		});
		this.onTabAdd(event1, (response) => {
			if (response.constructor.name == CreateTabOptions.name) {
				const tab = new Tab(response);
				tab.element.addEventListener(constants.events.dom.click, (e) => TabContainerScope.tabClick(e, this));
				let event2 = TabContainerScope.createTabContainerEvent({
					index: tabs.items.length,
					tab: tab,
					container: this
				});
				this.items.add(tab);
				tabs.add(tab);
				this.onTabAdded(event2);
			}
		});
	}

	/**
	 * @param {number} index 
	 */
	closeTab(index) {
		const tabs = TabContainerScope.getTabs(this);
		const tab = tabs.get(index);
		if (tab) {
			TabContainerScope.tabCloseActionHandler({
				container: this,
				index: index,
				tab: tab
			});
		}
	}
}

// CreateTabContainerOptions
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
		this.onTabAdd = options.onTabAdd;
		this.onTabAdded = options.onTabAdded;
		this.onTabClose = options.onTabClose;
		this.onTabClosed = options.onTabClosed;
		this.onTabActivate = options.onTabActivate;
		this.onTabActivated = options.onTabActivated;
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

	/**
	 * @type {(event: TabContainerEvent, callback:(response:boolean|CreateTabOptions)=>void)=>void}
	 */
	get onTabAdd() {
		return _CreateTabContainerOptions_onTabAdd.get(this);
	}

	set onTabAdd(value) {
		_CreateTabContainerOptions_onTabAdd.set(this, typeof (value) == constants.types.function ? value : defaultCancellableAddEventHandler);
	}

	/**
	 * @type {(event: TabContainerEvent)=>void}
	 */
	get onTabAdded() {
		return _CreateTabContainerOptions_onTabAdded.get(this);
	}

	set onTabAdded(value) {
		_CreateTabContainerOptions_onTabAdded.set(this, typeof (value) == constants.types.function ? value : defaultEventHandler);
	}

	/**
	 * @type {(event: TabContainerEvent, callback:(cancel:boolean)=>void)=>void}
	 */
	get onTabClose() {
		return _CreateTabContainerOptions_onTabRemove.get(this);
	}

	set onTabClose(value) {
		_CreateTabContainerOptions_onTabRemove.set(this, typeof (value) == constants.types.function ? value : defaultCancellableEventHandler);
	}

	/**
	 * @type {(event: TabContainerEvent)=>void}
	 */
	get onTabClosed() {
		return _CreateTabContainerOptions_onTabRemoved.get(this);
	}

	set onTabClosed(value) {
		_CreateTabContainerOptions_onTabRemoved.set(this, typeof (value) == constants.types.function ? value : defaultEventHandler);
	}

	/**
	 * @type {(event: TabContainerEvent, callback:(cancel:boolean)=>void)=>void}
	 */
	get onTabActivate() {
		return _CreateTabContainerOptions_onTabActivate.get(this);
	}

	set onTabActivate(value) {
		_CreateTabContainerOptions_onTabActivate.set(this, typeof (value) == constants.types.function ? value : defaultCancellableEventHandler);
	}

	/**
	 * @type {(event: TabContainerEvent)=>void}
	 */
	get onTabActivated() {
		return _CreateTabContainerOptions_onTabActivated.get(this);
	}

	set onTabActivated(value) {
		_CreateTabContainerOptions_onTabActivated.set(this, typeof (value) == constants.types.function ? value : defaultEventHandler);
	}

	static fromJSON(object) {
		if (object instanceof CreateTabContainerOptions) {
			return object;
		} else {
			return new CreateTabContainerOptions(object);
		}
	}
}

class TabContainerEvent extends ContainerEvent {
	constructor() {
		super();
	}

	/**
	 * @type {TabContainer}
	 */
	get container() {
		return super.container;
	}

	set container(value) {
		super.container = value;
	}
}

class TabControlInfo {
	/**
	 * 
	 * @param {TabControlInfo} tabControlInfo 
	 */
	constructor(tabControlInfo) {
		/**
		 * @type {number}
		 */
		this.index = tabControlInfo.index;
		/**
		 * @type {Tab}
		 */
		this.tab = tabControlInfo.tab;

		/**
		 * @type {Container}
		 */
		this.container = tabControlInfo.container;
	}
}

module.exports = { TabContainer, CreateTabContainerOptions, TabContainerEvent };