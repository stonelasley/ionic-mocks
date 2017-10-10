"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alert_1 = require("./alert");
var AlertControllerMock = /** @class */ (function () {
    function AlertControllerMock() {
    }
    AlertControllerMock.instance = function (alertMock) {
        var instance = jasmine.createSpyObj('AlertController', ['create']);
        instance.create.and.returnValue(alertMock || alert_1.AlertMock.instance());
        return instance;
    };
    return AlertControllerMock;
}());
exports.AlertControllerMock = AlertControllerMock;
//# sourceMappingURL=alert-controller.js.map