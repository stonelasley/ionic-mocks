"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var SplashScreenMock = /** @class */ (function () {
    function SplashScreenMock() {
    }
    SplashScreenMock.instance = function () {
        return create_spy_1.createSpyObj('SplashScreen', ['show', 'hide']);
    };
    return SplashScreenMock;
}());
exports.SplashScreenMock = SplashScreenMock;
//# sourceMappingURL=splash-screen.js.map