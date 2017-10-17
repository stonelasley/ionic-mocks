"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var alert_1 = require("./alert");
var AlertControllerMock = /** @class */ (function () {
    function AlertControllerMock() {
    }
    AlertControllerMock.instance = function (alertMock) {
        var instance = create_spy_1.createSpyObj('AlertController', ['create']);
        instance.create.and.returnValue(alertMock || alert_1.AlertMock.instance());
        return instance;
    };
    return AlertControllerMock;
}());
exports.AlertControllerMock = AlertControllerMock;
//# sourceMappingURL=alert-controller.js.map