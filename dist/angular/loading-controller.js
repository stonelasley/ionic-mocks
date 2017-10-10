"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loading_1 = require("./loading");
var LoadingControllerMock = /** @class */ (function () {
    function LoadingControllerMock() {
    }
    LoadingControllerMock.instance = function (loading) {
        var instance = jasmine.createSpyObj('LoadingController', ['create']);
        instance.create.and.returnValue(loading || loading_1.LoadingMock.instance());
        return instance;
    };
    return LoadingControllerMock;
}());
exports.LoadingControllerMock = LoadingControllerMock;
//# sourceMappingURL=loading-controller.js.map