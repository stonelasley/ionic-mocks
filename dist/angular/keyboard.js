"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IonKeyboardMock = /** @class */ (function () {
    function IonKeyboardMock() {
    }
    IonKeyboardMock.instance = function () {
        var instance = jasmine.createSpyObj('Keyboard', [
            'close',
            'didHide',
            'didShow',
            'eventsAvailable',
            'hasFocusedTextInput',
            'isOpen',
            'onClose',
            'willHide',
            'willShow'
        ]);
        instance.isOpen.and.returnValue(false);
        return instance;
    };
    return IonKeyboardMock;
}());
exports.IonKeyboardMock = IonKeyboardMock;
//# sourceMappingURL=keyboard.js.map