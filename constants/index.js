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
			}
		},
		css: {
			columns: {
				column: 'lb-container-column',
				left: 'left',
				middle: 'middle',
				right: 'right'
			},
			controls: {
				title: 'lb-title',
				lintelBar: 'lb',
				control: 'lb-control',
				container: 'lb-container',
				tabContainer: 'lb-tab-container',
				titleBarDragRegion: 'lb-drag-region',
				button: 'lb-button',
				tab: 'lb-tab',
				icon: 'lb-icon',
				fontIcon:'lb-font-icon',
				imageIcon:'lb-image-icon',
				appIcon:'lb-app-icon',
				tabIconContainer: 'lb-tab-icon-container'
			},
			fontIcons: {
				primary: 'mdi',
				minimize: 'mdi-window-minimize',
				maximize: 'mdi-window-maximize',
				restore: 'mdi-window-restore',
				alwaysOnTopToggle: 'mdi-chevron-up',
				closeWindow: 'mdi-window-close',
				back: 'mdi-chevron-left-box',
				forward: 'mdi-chevron-right-box',
				menu: 'mdi-dots-vertical',
				close: 'mdi-close',
				add: 'mdi-plus-box'
			},
			controlActions: {
				minimize: 'minimize',
				maximize: 'maximize',
				restore: 'restore',
				close: 'close',
				back: 'back',
				forward: 'forward',
				menu: 'menu',
				add: 'add'
			},
			controlStates: {
				active: 'active',
				disabled: 'disabled',
				hidden:'hidden'
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
			boolean: 'boolean',
			number: 'number'
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
				action: 'data-action',
				disabled: 'disabled'
			},
			roles: {
				tab: 'tab',
				iconMenu: 'iconmenu',
				iconClose: 'iconclose'
			}
		}
	};
}

module.exports = defineConstants();