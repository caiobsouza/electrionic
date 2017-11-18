const net = require('net');
const dotenv = require('dotenv');
const moment = require('moment');
const exec = require('child_process').exec;

dotenv.config();
const client = new net.Socket();

let electronStarted;

const tryConnection = () => client.connect(8100, 'localhost', () => {
    client.end();
    if (!electronStarted) {
        electronStarted = true;
        setTimeout(() => { 
            exec('electron .');
            console.log(`[${moment(new Date()).format('HH:mm:ss')}]  starting electron ...`);
        }, 15000);        
    }
});

tryConnection();

client.on('error', (error) => {
    console.warn(error);
    setTimeout(tryConnection, 1000);
});

