"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Browser = /** @class */ (function () {
    function Browser(window) {
        this.window = window;
    }
    // on(event: string, func: () => void) {
    //   this.window.on(event, func);
    // }
    Browser.prototype.maximizeWindow = function () {
        this.window.maximize();
    };
    Browser.prototype.setWindow = function (window) {
        this.window = window;
    };
    Browser.prototype.showWindow = function () {
        this.window.show();
    };
    Browser.prototype.setURL = function (url) {
        this.window.loadURL(url);
    };
    return Browser;
}());
exports.default = Browser;
