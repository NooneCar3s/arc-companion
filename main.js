const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1300,
    height: 820,
    minWidth: 900,
    minHeight: 600,
    frame: false,
    title: "ARC Companion",
    backgroundColor: "#050608",
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile("index.html");

  ipcMain.handle("window:minimize", () => {
    if (win) win.minimize();
  });

  ipcMain.handle("window:toggle-maximize", () => {
    if (!win) return { isMaximized: false };

    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }

    return { isMaximized: win.isMaximized() };
  });

  ipcMain.handle("window:close", () => {
    if (win) win.close();
  });

  win.on("maximize", () => {
    if (win?.webContents) {
      win.webContents.send("window:maximized", true);
    }
  });

  win.on("unmaximize", () => {
    if (win?.webContents) {
      win.webContents.send("window:maximized", false);
    }
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});