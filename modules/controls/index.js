const constants = require('../constants');

let _Control_text = new WeakMap();
let _Control_title = new WeakMap();
let _Control_onClick = new WeakMap();
let _Control_element = new WeakMap();
class Control {
	/**
	 * Creates a new control
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		this.text = options.text;
		this.title = options.title;
		this.onClick = options.onClick;
	}

	/**
	 * @type {string}
	 */
	get text() {
		return _Control_text.get(this) ?? '';
	}

	set text(value) {
		if (typeof (value) == 'string') {
			_Control_text.set(this, value);
		}
	}

	/**
	 * @type {string}
	 */
	get title() {
		return _Control_title.get(this) ?? '';
	}

	set title(value) {
		if (typeof (value) == 'string') {
			_Control_title.set(this, value);
		}
	}

	/**
	 * @type {(event:ControlEvent)=>void}
	 */
	get onClick() {
		return _Control_onClick.get(this);
	}

	set onClick(value) {
		if (typeof (value) == 'function' && this.element) {
			_Control_onClick.set(this, value);
			this.element.onclick = this.onClick;
		}
	}

	/**
	 * @type {HTMLElement}
	 */
	get element() {
		return _Control_element.get(this);
	}

	set element(value) {
		if (this.element) {
			throw new Error(constants.messages.errors.elementOnlyOnce);
		} else {
			_Control_element.set(this, value);
		}
	}
}

let _CreateControlOptions_text = new WeakMap();
let _CreateControlOptions_title = new WeakMap();
let _CreateControlOptions_onClick = new WeakMap();
class CreateControlOptions {
	/**
	 * Creates a new CreateControlOptions instance
	 * @param {CreateControlOptions} options 
	 */
	constructor(options = {}) {
		this.text = options.text;
		this.title = options.title;
		this.onClick = options.onClick;
	}

	/**
	 * @type {string}
	 */
	get text() {
		return _CreateControlOptions_text.get(this);
	}

	set text(value) {
		if (typeof (value) == 'string') {
			_CreateControlOptions_text.set(this, value);
		}
	}

	/**
	 * @type {string}
	 */
	get title() {
		return _CreateControlOptions_title.get(this);
	}

	set title(value) {
		if (typeof (value) == 'string') {
			_CreateControlOptions_title.set(this, value);
		}
	}

	/**
	 * @type {(event:ControlEvent)=>void}
	 */
	get onClick() {
		return _CreateControlOptions_onClick.get(this);
	}

	set onClick(value) {
		if (typeof (value) == 'function') {
			_CreateControlOptions_onClick.set(this, value);
		}
	}
}

class ControlEvent {
	constructor() {
	}
}

class ControlGroup extends Control {
	/**
	 * Creates a control group
	 * @param {CreateControlGroupOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

class CreateControlGroupOptions extends CreateControlOptions {
	/**
	 * 
	 * @param {CreateControlGroupOptions} options 
	 */
	constructor(options = {}) {
		super(options);
	}
}

class Button extends Control {
	/**
	 * Creates a new button
	 * @param {Button} button 
	 */
	constructor(button = {}) {
		super(button);
	}
}

class CloseButton extends Button {
	constructor(button = {}) {
		super(button);
	}
}

class ResizeButton extends Button {
	constructor(button = {}) {
		super(button);
	}
}

class MinimizeButton extends Button {
	constructor(button = {}) {
		super(button);
	}
}

class WindowControls extends ControlGroup {
	constructor() {
		super();
	}
}

module.exports = {
	Control,
	CreateControlOptions,
	ControlEvent,
	ControlGroup,
	CreateControlGroupOptions,
	Button,
	CloseButton,
	ResizeButton,
	MinimizeButton,
	WindowControls
};