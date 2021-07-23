const constants = require('../constants');
const { List } = require('./list');
const { Control, CreateControlOptions, ControlEvent } = require('./control');

let _CreateContainerOptions_items = new WeakMap();
class CreateContainerOptions extends CreateControlOptions {
	/**
	 * @param {CreateContainerOptions} options 
	 */
	constructor(options = {}) {
		super(options);
		this.items = options.items;
	}

	/**
	 * @type {Array<CreateControlOptions>}
	 */
	get items() {
		return _CreateContainerOptions_items.get(this);
	}

	set items(value) {
		_CreateContainerOptions_items.set(this, Array.isArray(value) ? value : []);
	}

	static fromJSON(object) {
		if (object instanceof CreateContainerOptions) {
			return object;
		} else {
			return new CreateContainerOptions(object);
		}
	}
}

let _Container_controls = new WeakMap();
let _Container_left_column = new WeakMap();
let _Container_middle_column = new WeakMap();
let _Container_right_column = new WeakMap();
class Container extends Control {
	/**
	 * Creates a control group
	 * @param {CreateContainerOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateContainerOptions.fromJSON(options);
		super(params);
		this.element = document.createElement('div');
		let controls = new List();
		_Container_controls.set(this, controls);
		createColumns(this);
		controls.onAdded = (control) => addControl(this, control);
		if (this.constructor.name == 'Container') {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	/**
	 * @type {List<Control>}
	 */
	get items() {
		return _Container_controls.get(this);
	}

	applyStyles() {
		super.applyStyles();
		this.element.classList.add(constants.css.controls.container);
	}

	applyEventListeners() {
		super.applyEventListeners();
	}
}

let _ContainerEvent_index = new WeakMap();
let _ContainerEvent_container = new WeakMap();
class ContainerEvent extends ControlEvent {
	constructor() {
		super();
	}

	/**
	 * @type {number}
	 */
	get index() {
		return _ContainerEvent_index.get(this) ?? -1;
	}

	set index(value) {
		_ContainerEvent_index.set(this, typeof (value) == constants.types.number && value > -1 ? value : -1);
	}

	/**
	 * @type {Container}
	 */
	get container() {
		return _ContainerEvent_container.get(this);
	}

	set container(value) {
		_ContainerEvent_container.set(this, value);
	}
}

/**
 * 
 * @param {Container} container 
 */
function createColumns(container) {
	let leftColumn = document.createElement('div');
	leftColumn.classList.add(...[constants.css.columns.column, constants.css.columns.left]);
	_Container_left_column.set(container, leftColumn);

	// Middle column
	let middleColumn = document.createElement('div');
	middleColumn.classList.add(...[constants.css.columns.column, constants.css.columns.middle]);
	_Container_middle_column.set(container, middleColumn);

	// Right Column
	let rightColumn = document.createElement('div');
	rightColumn.classList.add(...[constants.css.columns.column, constants.css.columns.right]);
	_Container_right_column.set(container, rightColumn);

	container.element.appendChild(leftColumn);
	container.element.appendChild(middleColumn);
	container.element.appendChild(rightColumn);
}

/**
 * 
 * @param {Container} container 
 * @param {Control} control 
 */
function addControl(container, control) {
	if (control.position == constants.controls.position.left) {
		_Container_left_column.get(container).appendChild(control.element);
	} else if (control.position == constants.controls.position.center) {
		_Container_middle_column.get(container).appendChild(control.element);
	} else {
		_Container_right_column.get(container).appendChild(control.element);
	}
}

module.exports = { Container, CreateContainerOptions, ContainerEvent };