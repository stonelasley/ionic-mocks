"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toast_1 = require("./toast");
var ToastControllerMock = /** @class */ (function () {
    function ToastControllerMock() {
    }
    ToastControllerMock.instance = function (toast) {
        var instance = jasmine.createSpyObj('ToastController', ['create']);
        instance.create.and.returnValue(toast || toast_1.ToastMock.instance());
        return instance;
    };
    return ToastControllerMock;
}());
exports.ToastControllerMock = ToastControllerMock;
//# sourceMappingURL=toast-controller.js.map