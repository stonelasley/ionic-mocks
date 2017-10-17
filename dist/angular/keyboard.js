"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var IonKeyboardMock = /** @class */ (function () {
    function IonKeyboardMock() {
    }
    IonKeyboardMock.instance = function () {
        var instance = create_spy_1.createSpyObj('Keyboard', [
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