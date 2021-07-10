const { Container } = require('./container');
const { MinimizeButton, ResizeButton, CloseButton, AlwaysOnTopToggle } = require('./windowButtons');
// eslint-disable-next-line no-unused-vars
const { CreateWindowControlsOptions } = require('./createWindowControlsOptions');
class WindowControls extends Container {
	/**
	 * Creates a new button
	 * @param {CreateWindowControlsOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateWindowControlsOptions.fromJSON(options);
		super(params);

		if (params.alwaysOnTopToggle) {
			this.controls.add(new AlwaysOnTopToggle());
		}

		if (params.minimize) {
			this.controls.add(new MinimizeButton());
		}

		if (params.maximize) {
			this.controls.add(new ResizeButton());
		}

		if (params.close) {
			this.controls.add(new CloseButton());
		}

		if (this.constructor.name == WindowControls.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}

	get items() {
		return super.controls;
	}

	set items(value) {
		super.controls = value;
	}
}

module.exports = { WindowControls };