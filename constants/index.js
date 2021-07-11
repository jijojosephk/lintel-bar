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
				tab: 'lintel-bar-tab',
				icon: 'lintel-bar-control-icon',
				tabIconContainer: 'lintel-bar-tab-icon-container'
			},
			fontIcons: {
				primary: 'mdi',
				minimize: 'mdi-window-minimize',
				maximize: 'mdi-window-maximize',
				restore: 'mdi-window-restore',
				alwaysOnTopToggle: 'mdi-chevron-up',
				closeWindow: 'mdi-close',
				back: 'mdi-chevron-left',
				forward: 'mdi-chevron-right',
				menu: 'mdi-dots-vertical',
				close: 'mdi-close-circle-outline'
			},
			controlActions: {
				minimize: 'minimize',
				maximize: 'maximize',
				restore: 'restore',
				close: 'close',
				back: 'back',
				forward: 'forward',
				menu: 'menu'
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
		},
		html: {
			attributes: {
				role: 'data-role',
				action: 'data-action'
			},
			roles: {
				tab: 'tab',
				iconMenu: 'icon-menu',
				iconClose: 'icon-close'
			}
		}
	};
}

module.exports = defineConstants();