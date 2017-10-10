"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModalMock = /** @class */ (function () {
    function ModalMock() {
    }
    ModalMock.instance = function () {
        var _dismissCallback;
        var instance = jasmine.createSpyObj('Modal', ['present', 'dismiss', 'onDidDismiss']);
        instance.present.and.returnValue(Promise.resolve());
        instance.dismiss.and.callFake(function (data) {
            _dismissCallback(data);
            return Promise.resolve();
        });
        instance.onDidDismiss.and.callFake(function (callback) {
            _dismissCallback = callback;
        });
        return instance;
    };
    return ModalMock;
}());
exports.ModalMock = ModalMock;
//# sourceMappingURL=modal.js.map