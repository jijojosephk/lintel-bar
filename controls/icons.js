const { Element } = require('./element');

class Icon extends Element {
	/**
	 * @param {CreateElementOptions} options 
	 */
	constructor(options) {
		super(options);
	}
}

// eslint-disable-next-line no-unused-vars
class FontIcon extends Icon {
	constructor() {
		super();
		this.element = document.createElement('i');
	}
}

// eslint-disable-next-line no-unused-vars
class ImageIcon extends Icon {
	constructor() {
		super();
		this.element = document.createElement('img');
	}
}

module.exports = { Icon, FontIcon, ImageIcon };