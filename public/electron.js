const { app, BrowserWindow, Menu } = require('electron')

Menu.setApplicationMenu(null)

const isDev = process.env.NODE_ENV === 'development'

function createWindow() {
    
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: __dirname + '/build/icon.png',
        webPreferences: {
            nodeIntegration: true,
            devTools: isDev,
        }
    })

    if (isDev) {
        win.loadURL('http://localhost:' + process.env.PORT)
        win.webContents.openDevTools()
    } else {
        win.loadFile('build/index.html');
    }
}

app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})