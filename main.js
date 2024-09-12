const { app, BrowserWindow } = require("electron");
// const { exec } = require("child_process");

let mainWindow;

function createWindow() {
  // Tạo cửa sổ Electron
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Mở giao diện Node-RED trong Electron
  mainWindow.loadURL("http://127.0.0.1:2000/ui");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  // node-red --port 2000 --userDir /node-red-data
  // Đợi Node-RED khởi động rồi mới mở Electron
  setTimeout(createWindow, 1000); // Chờ khoảng 5 giây để Node-RED khởi động
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
