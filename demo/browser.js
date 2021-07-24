document.addEventListener('DOMContentLoaded', () => {
	const { LintelBar } = require('../');
	const path = require('path');
	let lb = new LintelBar({
		template: 'tabbed'
	});
	lb.appIcon.file = path.join(__dirname,'icon.png');
});

