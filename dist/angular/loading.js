"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoadingMock = /** @class */ (function () {
    function LoadingMock() {
    }
    LoadingMock.instance = function () {
        var instance = jasmine.createSpyObj('Loading', ['present', 'dismiss', 'setContent', 'setSpinner']);
        instance.present.and.returnValue(Promise.resolve());
        return instance;
    };
    return LoadingMock;
}());
exports.LoadingMock = LoadingMock;
//# sourceMappingURL=loading.js.map