"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var HapticMock = /** @class */ (function () {
    function HapticMock() {
    }
    HapticMock.instance = function () {
        var instance = create_spy_1.createSpyObj('Haptic', ['available',
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