const path = require('path');
const constants = require('../constants');
const { Container } = require('./container');
const { WindowControls } = require('./windowControls');
const { TabContainer } = require('./tabContainer');
const { WindowTitle } = require('./windowTitle');
// eslint-disable-next-line no-unused-vars
const { ImageIcon } = require('./icons');

let _CreateLintelBarOptions_template = new WeakMap();
class CreateLintelBarOptions {
	/**
	 * @param {CreateLintelBarOptions} options 
	 */
	constructor(options = {}) {
		this.template = options.template;
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
	 * @type {ImageIcon}
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
		insertStylesheets();
		this.element.classList.add(...[constants.css.controls.lintelBar]);
	}

	applyEventListeners() {
		super.applyEventListeners();
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
		// Window title
		_LintelBar_windowTitle.set(lintelBar, new WindowTitle({
			text: 'Window Title',
			position: 'center'
		}));

		// Window controls
		_LintelBar_windowControls.set(lintelBar, new WindowControls({
			position: 'right'
		}));

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
		// Tabs
		_LintelBar_tabContainer.set(lintelBar, new TabContainer());

		// Window title
		_LintelBar_windowTitle.set(lintelBar, new WindowTitle({
			text: 'Window Title',
			position: 'center'
		}));

		// Window controls
		_LintelBar_windowControls.set(lintelBar, new WindowControls({
			position: 'right'
		}));

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

function insertStylesheets() {
	let head = document.querySelector('head');
	let materialCss = document.createElement('link');
	materialCss.rel = 'stylesheet';
	materialCss.href = path.join(__dirname, 'css/materialdesignicons.min.css');
	let customCss = document.createElement('link');
	customCss.rel = 'stylesheet';
	customCss.href = path.join(__dirname, 'css/index.css');
	head.appendChild(materialCss);
	head.appendChild(customCss);
}

module.exports = { LintelBar };
