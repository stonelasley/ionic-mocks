"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SplashScreenMock = /** @class */ (function () {
    function SplashScreenMock() {
    }
    SplashScreenMock.instance = function () {
        return jasmine.createSpyObj('SplashScreen', ['show', 'hide']);
    };
    return SplashScreenMock;
}());
exports.SplashScreenMock = SplashScreenMock;
//# sourceMappingURL=splash-screen.js.map