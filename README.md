# electrionic
Base project to build Ionic apps with Electron

## Getting Started
Run `npm start` to start the project.

## Setting Electron as Production
To set the Electron wrapper to run in production mode, modify the file [.env](https://github.com/caiobsouza/electrionic/blob/master/.env#L2) and set `ELECTRON_DEV=false`. This will make the Electron bootstraper to load `../www/index.html` instead of `http://localhost:8100`

## Authors
* [Caio Souza](https://github.com/caiobsouza)
* [Petrus Cyrino](https://github.com/petrusxz)
