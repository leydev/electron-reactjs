import { app, BrowserWindow, Menu, globalShortcut } from 'electron'
import isDev from "electron-is-dev"

let window;

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    })

    Menu.setApplicationMenu(null)
    win.maximize(true);

    // and load the index.html of the app.
    isDev ? win.loadURL("http://127.0.0.1:8001") :
        win.loadFile("build/renderer/index.html")

    // Open the DevTools.
    win.webContents.openDevTools()

    globalShortcut.register('CommandOrControl+I', () => {
        console.log('Opening the dev tools')
        if (isDev) win.webContents.openDevTools()
    })

    return win
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)
app.on("quit", () => {
    process.exit(0)
})
// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        window = createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.