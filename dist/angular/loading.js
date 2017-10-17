"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var LoadingMock = /** @class */ (function () {
    function LoadingMock() {
    }
    LoadingMock.instance = function () {
        var instance = create_spy_1.createSpyObj('Loading', ['present', 'dismiss', 'setContent', 'setSpinner']);
        instance.present.and.returnValue(Promise.resolve());
        return instance;
    };
    return LoadingMock;
}());
exports.LoadingMock = LoadingMock;
//# sourceMappingURL=loading.js.map