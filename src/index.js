const { app, BrowserWindow} = require('electron');
const path = require ('path');

let win
let second_win

const create_window = () => {

  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  second_win = new BrowserWindow({
    width: 200,
    height: 100,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile(path.join('src/index.html'))
  second_win.loadFile(path.join('src/index2.html'))

  win.on('closed', () => {
    win = null;
  })

  second_win.on('closed', () => {
    second_win = null;
  })

}


app.whenReady().then(create_window);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    create_window();
  }
})