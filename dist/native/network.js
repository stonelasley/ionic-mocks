"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var create_spy_1 = require("../utilities/create-spy");
var NetworkMock = /** @class */ (function () {
    function NetworkMock() {
    }
    NetworkMock.instance = function (networkType) {
        var instance = create_spy_1.createSpyObj('Network', [
            'type',
            'downlinkMax',
            'onchange',
            'onDisconnect',
            'onConnect',
        ]);
        instance.type.and.returnValue(networkType || 'wifi');
        instance.downlinkMax.and.returnValue('42');
        instance.onChange.and.returnValue(Observable_1.Observable.empty());
        instance.onDisconnect.and.returnValue(Observable_1.Observable.empty());
        instance.onConnect.and.returnValue(Observable_1.Observable.empty());
        return instance;
    };
    return NetworkMock;
}());
exports.NetworkMock = NetworkMock;
//# sourceMappingURL=network.js.map