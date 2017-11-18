const electron = require('electron');
const path = require('path');
const dotenv = require('dotenv');

const { app, BrowserWindow } = electron;

let window;

function bootstrap() {
    dotenv.config(path.resolve(`${__dirname}/../.env`));

    window = new BrowserWindow({
        height: 680,
        width: 1024
    });

    const url = process.env.ELECTRON_DEV ? 'http://localhost:8100' : `file://${__dirname}/../www/index.html`

    window.loadURL(url);
};

app.on('ready', bootstrap);

