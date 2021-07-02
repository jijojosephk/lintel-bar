function defineConstants() {
	return {
		messages: {
			errors: {
				methodNotImplemented: 'Method is not implemented',
				elementOnlyOnce: 'The property \'element\' can be set only once'
			}
		},
		events: {
			dom: {
				// All DOM events should be defined here.
			}
		},
		css: {
			titleBar: 'lintel-bar',
			titleBarDragRegion: 'lintel-bar-drag-region',
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