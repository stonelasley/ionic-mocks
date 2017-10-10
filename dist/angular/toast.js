"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToastMock = /** @class */ (function () {
    function ToastMock() {
    }
    ToastMock.instance = function () {
        var instance = jasmine.createSpyObj('Toast', ['present', 'dismissAll', 'setContent', 'setSpinner']);
        instance.present.and.returnValue(Promise.resolve());
        return instance;
    };
    return ToastMock;
}());
exports.ToastMock = ToastMock;
//# sourceMappingURL=toast.js.map