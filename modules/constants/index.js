function defineConstants() {
	return {
		messages: {
			errors: {
				methodNotImplemented: 'Method is not implemented'
			}
		},
		events: {
			dom: {
				// All DOM events should be defined here.
			}
		},
		css: {
			titleBar: 'lintel-bar',
			control: 'lintel-bar-control',
			button: 'lintel-bar-button',
			controlIcon: 'lintel-bar-control-icon',
			controlIcons: {
				close: 'icon-close',
				maximize: 'icon-maximize',
				minimize: 'icon-minimize',
				restore: 'icon-restore',
				toggle: 'icon-toggle',
				float: 'icon-float',
				settings: 'icon-settings'
			}
		}
	};
}

module.exports = defineConstants();