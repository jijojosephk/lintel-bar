const { Container } = require('./container');
const { TabContainerEvent } = require('./events/tabContainerEvent');
// eslint-disable-next-line no-unused-vars
const { List } = require('./list');
const { CreateTabContainerOptions } = require('./options/createTabContainerOptions');
const { Tab } = require('./tab');
const { BackButton, ForwardButton } = require('./windowButtons');
const constants = require('../constants');
// eslint-disable-next-line no-unused-vars
const defaultEventHandler = (event) => { };
// eslint-disable-next-line no-unused-vars
const defaultCancellableEventHandler = (event, callback) => { callback(false); };
const tabEventHandlers = {
	click: {
		tab: tabActivateHandler,
		iconmenu: tabMenuHandler,
		iconclose: tabCloseHandler
	}
};

let _TabContainer_tabs = new WeakMap();
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
		this.onTabAdd = options.onTabAdd;
		this.onTabAdded = options.onTabAdded;
		this.onTabClose = options.onTabClose;
		this.onTabClosed = options.onTabClosed;
		this.onTabActivate = options.onTabActivate;
		this.onTabActivated = options.onTabActivated;
		_TabContainer_tabs.set(this, new List());
		for (const tabOption of options.items) {
			tabOption.position = constants.controls.position.center;
			let tabButton = new Tab(tabOption);
			tabButton.element.addEventListener(constants.events.dom.click, (e) => tabClick(e, this));
			this.items.add(tabButton);
			this.tabs.add(tabButton);
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
	get tabs() {
		return _TabContainer_tabs.get(this);
	}

	/**
	 * @type {(event: TabContainerEvent, callback:(cancel:boolean)=>void)=>void}
	 */
	get onTabAdd() {
		return _TabContainer_onTabAdd.get(this);
	}

	set onTabAdd(value) {
		_TabContainer_onTabAdd.set(this, typeof (value) == constants.types.function ? value : defaultCancellableEventHandler);
	}

	/**
	 * @type {(event: TabContainerEvent)=>void}
	 */
	get onTabAdded() {
		return _TabContainer_onTabAdded.get(this);
	}

	set onTabAdded(value) {
		_TabContainer_onTabAdded.set(this, typeof (value) == constants.types.function ? value : defaultEventHandler);
	}

	/**
	 * @type {(event: TabContainerEvent, callback:(cancel:boolean)=>void)=>void}
	 */
	get onTabClose() {
		return _TabContainer_onTabRemove.get(this);
	}

	set onTabClose(value) {
		_TabContainer_onTabRemove.set(this, typeof (value) == constants.types.function ? value : defaultCancellableEventHandler);
	}

	/**
	 * @type {(event: TabContainerEvent)=>void}
	 */
	get onTabClosed() {
		return _TabContainer_onTabRemoved.get(this);
	}

	set onTabClosed(value) {
		_TabContainer_onTabRemoved.set(this, typeof (value) == constants.types.function ? value : defaultEventHandler);
	}

	/**
	 * @type {(event: TabContainerEvent, callback:(cancel:boolean)=>void)=>void}
	 */
	get onTabActivate() {
		return _TabContainer_onTabActivate.get(this);
	}

	set onTabActivate(value) {
		_TabContainer_onTabActivate.set(this, typeof (value) == constants.types.function ? value : defaultCancellableEventHandler);
	}

	/**
	 * @type {(event: TabContainerEvent)=>void}
	 */
	get onTabActivated() {
		return _TabContainer_onTabActivated.get(this);
	}

	set onTabActivated(value) {
		_TabContainer_onTabActivated.set(this, typeof (value) == constants.types.function ? value : defaultEventHandler);
	}

	applyStyles() {
		super.applyStyles();
	}

	applyEventListeners() {
		super.applyEventListeners();
		this.tabs.onRemoved = (tab, index) => {
			this.items.remove(index);
			tab.element.remove();
			let event = new TabContainerEvent();
			event.control = tab;
			event.index = index;
			this.onTabClosed(event);
		};
	}
}

/**
 * @param {MouseEvent} e 
 * @param {TabContainer} container
 */
function tabClick(e, container) {
	let role = e.target.getAttribute(constants.html.attributes.role);
	// Tab controls have 3 different roles.
	// Tab, Close Icon, Menu Icon
	if (!role) return;
	let tabElement = getTabElement(e.target, role);
	let tabControlInfo = getTabControlInfo(container, tabElement);
	tabControlInfo.originalTarget = e.target;
	tabEventHandlers.click[role](tabControlInfo, container);
}

/**
 * @param {Object} tabControlInfo 
 * @param {TabContainer} container 
 */
function tabActivateHandler(tabControlInfo, container) {
	let event = createEventInfo(tabControlInfo);
	container.onTabActivate(event, cancel => {
		if (!cancel) {
			event.control.active = true;
			container.onTabActivated(event);
		}
	});
}

/**
 * @param {Object} tabControlInfo 
 * @param {TabContainer} container 
 */
function tabCloseHandler(tabControlInfo, container) {
	container.onTabClose(createEventInfo(tabControlInfo), cancel => {
		if (!cancel) {
			// To do
			container.tabs.remove(tabControlInfo.index);
		}
	});
}

/**
 * @param {Object} tabControlInfo 
 * @param {TabContainer} container 
 */
function tabMenuHandler(tabControlInfo, container) {
	container.onActivate(createEventInfo(tabControlInfo));
}

/**
 * @param {Object} tabControlInfo 
 * @param {TabContainer} container
 * @returns {TabContainerEvent}
 */
function createEventInfo(tabControlInfo) {
	let event = new TabContainerEvent();
	event.originalTarget = tabControlInfo.originalTarget;
	event.control = tabControlInfo.item;
	event.index = tabControlInfo.index;
	return event;
}

/**
 * @param {TabContainer} container 
 * @param {HTMLElement} tabElement 
 */
function getTabControlInfo(container, tabElement) {
	for (var i = 0; i < container.tabs.items.length; i++) {
		if (tabElement == container.tabs.items[i].element) {
			return {
				index: i,
				item: container.tabs.items[i]
			};
		}
	}
}

/**
 * @param {HTMLElement} clickTarget 
 */
function getTabElement(clickTarget, role) {
	return role == constants.html.roles.tab ?
		clickTarget :
		role == constants.html.roles.iconMenu || role == constants.html.roles.iconClose ?
			clickTarget.parentElement.parentElement :
			null;
}

module.exports = { TabContainer };