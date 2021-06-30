const constants = require('../constants');

let _Control_text = new WeakMap();
let _Control_title = new WeakMap();
let _Control_onClick = new WeakMap();
// eslint-disable-next-line no-unused-vars
class Control {
	/**
	 * Creates a new control
	 * @param {Control} control 
	 */
	// eslint-disable-next-line no-unused-vars
	constructor(control = {}) {
		this.onClick = control.onClick;
		this.text = control.text;
		this.title = control.title;
	}

	/**
	 * @returns {HTMLElement}
	 */
	onAdd() {
		throw new Error(constants.messages.errors.methodNotImplemented);
	}

	onRemove() {
		throw new Error(constants.messages.errors.methodNotImplemented);
	}

	get onClick() {
		return _Control_onClick.get(this);
	}

	set onClick(value) {
		if (typeof (value) == 'function') {
			_Control_onClick.set(this, value);
		}
	}

	/**
	 * @type {string}
	 */
	get text() {
		return _Control_text.get(this);
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
		return _Control_title.get(this);
	}

	set title(value) {
		if (typeof (value) == 'string') {
			_Control_title.set(this, value);
		}
	}
}

let _ControlGroup_controls = new WeakMap();
class ControlGroup extends Control {
	/**
	 * 
	 * @param {ControlGroup} group 
	 */
	constructor(group = {}) {
		super(group);
	}

	get controls() {
		return _ControlGroup_controls.get(this);
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

// eslint-disable-next-line no-unused-vars
class CloseButton extends Button {
	constructor(button = {}) {
		super(button);
	}
}

// eslint-disable-next-line no-unused-vars
class ResizeButton extends Button {
	constructor(button = {}) {
		super(button);
	}
}

// eslint-disable-next-line no-unused-vars
class MinimizeButton extends Button {
	constructor(button = {}) {
		super(button);
	}
}

// eslint-disable-next-line no-unused-vars
class WindowControls extends ControlGroup {
	constructor() {
		super();
	}
}