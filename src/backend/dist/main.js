"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var electron_1 = require("electron");
var Browser_1 = __importDefault(require("./models/Browser"));
var window = null;
var createWindow = function () {
    window = new Browser_1.default(new electron_1.BrowserWindow({
        show: false,
        frame: false,
        webPreferences: {
            contextIsolation: false,
            preload: path_1.default.join(__dirname, "preload.ts"),
        },
    }));
    var url = process.env.FRONTEND_URL || "http://localhost:3000";
    window.setURL(url);
    window.maximizeWindow();
    window.showWindow();
    window.window.on("closed", function () {
        window = null;
    });
};
electron_1.app.on("ready", createWindow);
electron_1.app.on("activate", function () {
    if (window && window.window === null) {
        createWindow();
    }
});
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
