const { Container } = require('./container');
const { MinimizeButton, ResizeButton, CloseButton, AlwaysOnTopToggle } = require('./windowButtons');
// eslint-disable-next-line no-unused-vars
const { CreateWindowControlsOptions } = require('./options/createWindowControlsOptions');
class WindowControls extends Container {
	/**
	 * Creates a new button
	 * @param {CreateWindowControlsOptions} options 
	 */
	constructor(options = {}) {
		const params = CreateWindowControlsOptions.fromJSON(options);
		super(params);

		if (params.alwaysOnTopToggle) {
			this.items.add(new AlwaysOnTopToggle());
		}

		if (params.minimize) {
			this.items.add(new MinimizeButton());
		}

		if (params.maximize) {
			this.items.add(new ResizeButton());
		}

		if (params.close) {
			this.items.add(new CloseButton());
		}

		if (this.constructor.name == WindowControls.name) {
			this.applyStyles();
			this.applyEventListeners();
		}
	}
}

module.exports = { WindowControls };