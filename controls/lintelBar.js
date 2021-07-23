const path = require('path');
const constants = require('../constants');
const { Container } = require('./container');
const { WindowControls } = require('./windowControls');
const { TabContainer } = require('./tabContainer');
// eslint-disable-next-line no-unused-vars
const { CreateLintelBarOptions } = require('./options/createLintelBarOptions');
const { WindowTitle } = require('./windowTitle');
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

		let tabContainer = new TabContainer({
			onTabAdded: (e) => {
				e.container.selectedIndex = e.index;
			}
		});

		let windowTitle = new WindowTitle({
			text: 'Teams for Linux',
			position: 'center'
		});

		let windowControls = new WindowControls({
			position: 'right'
		});

		lintelBar.items.add(tabContainer);
		lintelBar.items.add(windowTitle);
		lintelBar.items.add(windowControls);
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
		let windowControls = new WindowControls({
			alwaysOnTopToggle: true,
			maximize: false
		});
		lintelBar.element.appendChild(windowControls.element);
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
