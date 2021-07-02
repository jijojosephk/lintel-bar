require('@electron/remote/main').initialize();
const { app, BrowserWindow } = require('electron');
const path = require('path');
/**
 * @type {BrowserWindow}
 */
let mainWindow;

function createMainWindow() {
	mainWindow = new BrowserWindow({
		frame: false,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true
		}
	});
	mainWindow.loadFile(path.join(__dirname, 'index.html')).then(() => {
		mainWindow.webContents.openDevTools();
	});
}

app.on('ready', createMainWindow);