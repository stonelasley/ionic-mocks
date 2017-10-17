"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var AlertMock = /** @class */ (function () {
    function AlertMock() {
    }
    AlertMock.instance = function () {
        var _dismissCallback;
        var instance = create_spy_1.createSpyObj('Alert', ['present', 'dismiss', 'onDidDismiss']);
        instance.present.and.returnValue(Promise.resolve());
        instance.dismiss.and.callFake(function () {
            _dismissCallback();
            return Promise.resolve();
        });
        instance.onDidDismiss.and.callFake(function (callback) {
            _dismissCallback = callback;
        });
        return instance;
    };
    return AlertMock;
}());
exports.AlertMock = AlertMock;
//# sourceMappingURL=alert.js.map