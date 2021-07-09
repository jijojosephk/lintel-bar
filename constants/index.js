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
				click: 'click',
				resize: 'resize'
				// All DOM events should be defined here.
			}
		},
		css: {
			columns: {
				column: 'lintel-bar-container-column',
				left: 'left',
				middle: 'middle',
				right: 'right'
			},
			controls: {
				title: 'lintel-bar-title',
				lintelBar: 'lintel-bar',
				control: 'lintel-bar-control',
				container: 'lintel-bar-container',
				titleBarDragRegion: 'lintel-bar-drag-region',
				button: 'lintel-bar-button',
				tab:'lintel-bar-tab'
			},
			controlIcons: {
				controlIcon: 'lintel-bar-control-icon',
				primary: 'mdi',
				minimize: 'mdi-window-minimize',
				maximize: 'mdi-window-maximize',
				restore: 'mdi-window-restore',
				alwaysOnTopToggle: 'mdi-chevron-up',
				close: 'mdi-close',
				back:'mdi-chevron-left',
				forward:'mdi-chevron-right'
			},
			controlActions: {
				minimize: 'minimize',
				maximize: 'maximize',
				restore: 'restore',
				close: 'close',
				back:'back',
				forward:'forward'
			},
			controlPosition: {
				left: 'position-left',
				center: 'position-center',
				right: 'position-right'
			},
			dragable: 'dragable'
		},
		themes: [
			'default',
			'teams',
			'slack',
			'github'
		],
		templates: {
			default: 'default',
			tabbed: 'tabbed'
		},
		types: {
			string: 'string',
			function: 'function',
			object: 'object',
			boolean: 'boolean'
		},
		controls: {
			position: {
				left: 'left',
				center: 'center',
				right: 'right'
			}
		}
	};
}

module.exports = defineConstants();