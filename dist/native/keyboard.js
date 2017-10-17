"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var create_spy_1 = require("../utilities/create-spy");
var KeyboardMock = /** @class */ (function () {
    function KeyboardMock() {
    }
    KeyboardMock.instance = function () {
        var instance = create_spy_1.createSpyObj('Keyboard', [
            'hideKeyboardAccessoryBar',
            'show',
            'close',
            'disableScroll',
            'onKeyboardShow',
            'onKeyboardHide'
        ]);
        instance.onKeyboardShow.and.returnValue(Observable_1.Observable.empty());
        instance.onKeyboardHide.and.returnValue(Observable_1.Observable.empty());
        return instance;
    };
    return KeyboardMock;
}());
exports.KeyboardMock = KeyboardMock;
//# sourceMappingURL=keyboard.js.map