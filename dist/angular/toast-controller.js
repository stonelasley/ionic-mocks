"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var toast_1 = require("./toast");
var ToastControllerMock = /** @class */ (function () {
    function ToastControllerMock() {
    }
    ToastControllerMock.instance = function (toast) {
        var instance = create_spy_1.createSpyObj('ToastController', ['create']);
        instance.create.and.returnValue(toast || toast_1.ToastMock.instance());
        return instance;
    };
    return ToastControllerMock;
}());
exports.ToastControllerMock = ToastControllerMock;
//# sourceMappingURL=toast-controller.js.map