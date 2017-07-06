# About
This is the code repository for the finished angular+electron setup tutorial

# Tutorial

Setup the base angular project

```
npm install -g @angular/cli
ng new your-app  
cd your-app
```

Add main.js
```
// ./main.js
const {app, BrowserWindow} = require('electron')

let win = null;

function createWindow() {
  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});

  // Specify entry point
  win.loadURL('http://localhost:4200');

  // Show dev tools
  // Remove this line before distributing
  win.webContents.openDevTools()

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });
}


app.on('ready', function () {

  createWindow();

});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
```

Add main.js to package.json

```
{
  ...
  "main": "main.js",
  ...
}
```

Install electron
``` npm install -g electron ```

Launch angular ``` npm start ```

Open a seperate terminal in the same directory and run ``` electron . ```

That should do it!
