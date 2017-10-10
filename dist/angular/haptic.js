"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HapticMock = /** @class */ (function () {
    function HapticMock() {
    }
    HapticMock.instance = function () {
        var instance = jasmine.createSpyObj('Haptic', ['available',
            'gestureSelectionChanged',
            'gestureSelectionEnd',
            'gestureSelectionStart',
            'impact',
            'notification',
            'selection'
        ]);
        instance.available.and.returnValue(true);
        return instance;
    };
    return HapticMock;
}());
exports.HapticMock = HapticMock;
//# sourceMappingURL=haptic.js.map