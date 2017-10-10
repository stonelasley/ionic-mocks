"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StorageMock = /** @class */ (function () {
    function StorageMock() {
    }
    StorageMock.instance = function (key, value) {
        if (key === void 0) { key = 'key1'; }
        if (value === void 0) { value = 'value1'; }
        var instance = jasmine.createSpyObj('Storage', [
            'driver',
            'ready',
            'get',
            'set',
            'remove',
            'clear',
            'length',
            'keys',
            'forEach'
        ]);
        instance['driver'] = '';
        instance.ready.and.returnValue(Promise.resolve({}));
        instance.set.and.returnValue(Promise.resolve());
        instance.get.and.returnValue(Promise.resolve(value));
        instance.remove.and.returnValue(Promise.resolve());
        instance.clear.and.returnValue(Promise.resolve());
        instance.length.and.returnValue(Promise.resolve(1));
        instance.keys.and.returnValue(Promise.resolve([key]));
        instance.forEach.and.returnValue(Promise.resolve());
        return instance;
    };
    return StorageMock;
}());
exports.StorageMock = StorageMock;
//# sourceMappingURL=storage.js.map