const { app, BrowserWindow} = require('electron');
const path = require ('path');

let win
let second_win

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

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

  win.loadFile(path.join('src/countdown10.html'))
  second_win.loadFile(path.join('src/countdown100.html'))

  win.on('closed', () => {
    win = null;
  })

  second_win.on('closed', () => {
    second_win = null;
  })

}


app.whenReady().then(() => {
  
  create_window();

  console.log('Starting Fibonacci calculation...');
  const fibResult = fibonacci(10); // Adjust the input value as needed
  console.log(`Fibonacci result: ${fibResult}`);

})

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