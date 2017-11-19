const electron = require('electron');
const path = require('path');
const dotenv = require('dotenv');

const { app, BrowserWindow, Menu } = electron;

/**
 * @type {BrowserWindow}
 */
let window;

function bootstrap() {
    dotenv.config(path.resolve(`${__dirname}/../.env`));

    window = new BrowserWindow({
        height: 680,
        width: 1024,
        autoHideMenuBar: true
    });

    configureMenu();

    const url = process.env.ELECTRON_DEV ? 'http://localhost:8100' : `file://${__dirname}/../www/index.html`
    window.loadURL(url);
};

function configureMenu() {
    Menu.setApplicationMenu(null);

    if (process.env.ELECTRON_DEV) {
        const menuTemplate = [{
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'toggledevtools' }
            ]
        }];

        const menu = Menu.buildFromTemplate(menuTemplate);
        Menu.setApplicationMenu(menu);
    }
}

app.on('ready', bootstrap);

