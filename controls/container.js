const constants = require('../constants');
const { Control } = require('./control');
const { ControlList } = require('./controlList');
// eslint-disable-next-line no-unused-vars
const { CreateContainerOptions } = require('./createContainerOptions');
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
		// Left column
		let leftColumn = document.createElement('div');
		leftColumn.classList.add(...[constants.css.columns.column, constants.css.columns.left]);
		_Container_left_column.set(this, leftColumn);

		// Middle column
		let middleColumn = document.createElement('div');
		middleColumn.classList.add(...[constants.css.columns.column, constants.css.columns.middle]);
		_Container_middle_column.set(this, middleColumn);

		// Right Column
		let rightColumn = document.createElement('div');
		rightColumn.classList.add(...[constants.css.columns.column, constants.css.columns.right]);
		_Container_right_column.set(this, rightColumn);

		this.element = document.createElement('div');
		this.element.appendChild(leftColumn);
		this.element.appendChild(middleColumn);
		this.element.appendChild(rightColumn);
		this.applyStyles();
		let controls = new ControlList();
		controls.onAdded = (control) => {
			if (control.position == constants.controls.position.left) {
				_Container_left_column.get(this).appendChild(control.element);
			} else if (control.position == constants.controls.position.center) {
				_Container_middle_column.get(this).appendChild(control.element);
			} else {
				_Container_right_column.get(this).appendChild(control.element);
			}
		};
		_Container_controls.set(this, controls);
	}

	/**
	 * @type {ControlList}
	 */
	get controls() {
		return _Container_controls.get(this);
	}
}

module.exports = { Container };