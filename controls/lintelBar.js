const path = require('path');
const constants = require('../constants');
const { Container } = require('./container');
// eslint-disable-next-line no-unused-vars
const { WindowControls, CreateWindowControlsOptions } = require('./windowControls');
// eslint-disable-next-line no-unused-vars
const { TabContainer, CreateTabContainerOptions } = require('./tabContainer');
// eslint-disable-next-line no-unused-vars
const { WindowTitle, CreateWindowTitleOptions } = require('./windowTitle');
// eslint-disable-next-line no-unused-vars
const { AppIcon, CreateImageIconOptions } = require('./icons');

let _CreateLintelBarOptions_template = new WeakMap();
let _CreateLintelBarOptions_appIcon = new WeakMap();
let _CreateLintelBarOptions_tabContainer = new WeakMap();
let _CreateLintelBarOptions_windowTitle = new WeakMap();
let _CreateLintelBarOptions_windowControls = new WeakMap();
class CreateLintelBarOptions {
	/**
	 * @param {CreateLintelBarOptions} options 
	 */
	constructor(options = {}) {
		this.template = options.template;
		this.appIcon = options.appIcon;
		this.tabContainer = options.tabContainer;
		this.windowTitle = options.windowTitle;
		this.windowControls = options.windowControls;
	}

	/**
	 * @type {'default'|'tabbed'}
	 */
	get template() {
		return _CreateLintelBarOptions_template.get(this);
	}

	set template(value) {
		if (typeof (value) == 'string') {
			_CreateLintelBarOptions_template.set(this, constants.templates[value]);
		}
	}

	/**
	 * @type {CreateImageIconOptions}
	 */
	get appIcon() {
		return _CreateLintelBarOptions_appIcon.get(this);
	}

	set appIcon(value) {
		_CreateLintelBarOptions_appIcon.set(this, value);
	}

	/**
	 * @type {CreateTabContainerOptions}
	 */
	get tabContainer() {
		return _CreateLintelBarOptions_tabContainer.get(this);
	}

	set tabContainer(value) {
		_CreateLintelBarOptions_tabContainer.set(this, value);
	}

	/**
	 * @type {CreateWindowTitleOptions}
	 */
	get windowTitle() {
		return _CreateLintelBarOptions_windowTitle.get(this);
	}

	set windowTitle(value) {
		_CreateLintelBarOptions_windowTitle.set(this, value);
	}

	/**
	 * @type {CreateWindowControlsOptions}
	 */
	get windowControls() {
		return _CreateLintelBarOptions_windowControls.get(this);
	}

	set windowControls(value) {
		_CreateLintelBarOptions_windowControls.set(this, value);
	}

	static fromJSON(object) {
		if (object instanceof CreateLintelBarOptions) {
			return object;
		} else {
			return new CreateLintelBarOptions(object);
		}
	}
}

let _LintelBar_appIcon = new WeakMap();
let _LintelBar_tabContainer = new WeakMap();
let _LintelBar_windowTitle = new WeakMap();
let _LintelBar_windowControls = new WeakMap();
class LintelBar extends Container {
	/**
	 * @param {CreateLintelBarOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateLintelBarOptions.fromJSON(options);
		super(params);
		createPlaceholders(this.element);
		let template = LintelBarTemplateFactory.fromTemplate(params.template);
		template.create(this, params);
		if (this.constructor.name == LintelBar.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
		setTimeout(() => this.window.show(), 100);
	}

	/**
	 * @type {}
	 */
	get appIcon() {
		return _LintelBar_appIcon.get(this);
	}

	/**
	 * @type {TabContainer}
	 */
	get tabContainer() {
		return _LintelBar_tabContainer.get(this);
	}

	/**
	 * @type {WindowTitle}
	 */
	get windowTitle() {
		return _LintelBar_windowTitle.get(this);
	}

	/**
	 * @type {WindowControls}
	 */
	get windowControls() {
		return _LintelBar_windowControls.get(this);
	}

	applyStyles() {
		super.applyStyles();
		LintelBar.loadStyles();
		this.element.classList.add(...[constants.css.controls.lintelBar]);
	}

	applyEventListeners() {
		super.applyEventListeners();
	}

	static loadStyles() {
		let head = document.querySelector('head');
		let materialCss = document.createElement('link');
		materialCss.rel = 'stylesheet';
		materialCss.href = path.join(process.cwd(), 'node_modules/@mdi/font/css/materialdesignicons.min.css');
		let customCss = document.createElement('link');
		customCss.rel = 'stylesheet';
		customCss.href = path.join(__dirname, 'css/index.css');
		head.appendChild(materialCss);
		head.appendChild(customCss);
	}
}

function createPlaceholders(element) {
	let body = document.querySelector('body');
	let dragRegion = document.createElement('div');
	dragRegion.classList.add(constants.css.controls.titleBarDragRegion);
	element.insertBefore(dragRegion, element.childNodes[0]);
	body.insertBefore(element, body.childNodes[0]);
}

class LintelBarTemplate {
	constructor() {
	}

	/**
	 * @param {LintelBar} lintelBar 
	 * @param {CreateLintelBarOptions} options
	 */
	// eslint-disable-next-line no-unused-vars
	create(lintelBar, options) {
		//No implementation
	}
}

class LintelBarTemplateDefault extends LintelBarTemplate {
	constructor() {
		super();
	}

	/**
	 * @param {LintelBar} lintelBar
	 * @param {CreateLintelBarOptions} options 
	 */
	// eslint-disable-next-line no-unused-vars
	create(lintelBar, options) {
		super.create(lintelBar);
		// Application icon
		_LintelBar_appIcon.set(lintelBar, new AppIcon(options.appIcon));

		// Window title
		_LintelBar_windowTitle.set(lintelBar, new WindowTitle(options.windowTitle));

		// Window controls
		_LintelBar_windowControls.set(lintelBar, new WindowControls(options.windowControls));

		lintelBar.items.add(lintelBar.appIcon);
		lintelBar.items.add(lintelBar.windowTitle);
		lintelBar.items.add(lintelBar.windowControls);
	}
}

class LintelBarTemplateTabbed extends LintelBarTemplate {
	constructor() {
		super();
	}

	/**
	 * @param {LintelBar} lintelBar
	 * @param {CreateLintelBarOptions} options 
	 */
	// eslint-disable-next-line no-unused-vars
	create(lintelBar, options) {
		super.create(lintelBar);
		// Application icon
		_LintelBar_appIcon.set(lintelBar, new AppIcon(options.appIcon));

		// Tabs
		_LintelBar_tabContainer.set(lintelBar, new TabContainer(options.tabContainer));

		// Window title
		_LintelBar_windowTitle.set(lintelBar, new WindowTitle(options.windowTitle));

		// Window controls
		_LintelBar_windowControls.set(lintelBar, new WindowControls(options.windowControls));

		lintelBar.items.add(lintelBar.appIcon);
		lintelBar.items.add(lintelBar.tabContainer);
		lintelBar.items.add(lintelBar.windowTitle);
		lintelBar.items.add(lintelBar.windowControls);
	}
}

class LintelBarTemplateFactory {
	/**
	 * @param {string} template
	 * @param {CreateLintelBarOptions} options 
	 * @returns {LintelBarTemplate}
	 */
	static fromTemplate(template) {
		let templateEngine = templateEngines[template];
		if (templateEngine) {
			return new templateEngine();
		} else {
			return new LintelBarTemplateDefault();
		}
	}
}

const templateEngines = {
	default: LintelBarTemplateDefault,
	tabbed: LintelBarTemplateTabbed
};

module.exports = { LintelBar };
