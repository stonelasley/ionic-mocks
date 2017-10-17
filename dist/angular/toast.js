"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var ToastMock = /** @class */ (function () {
    function ToastMock() {
    }
    ToastMock.instance = function () {
        var instance = create_spy_1.createSpyObj('Toast', ['present', 'dismissAll', 'setContent', 'setSpinner']);
        instance.present.and.returnValue(Promise.resolve());
        return instance;
    };
    return ToastMock;
}());
exports.ToastMock = ToastMock;
//# sourceMappingURL=toast.js.map