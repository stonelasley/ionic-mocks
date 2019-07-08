"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VibrationMock = /** @class */ (function () {
    function VibrationMock() {
    }
    VibrationMock.instance = function () {
        var instance = jasmine.createSpyObj('Vibration', ['vibrate']);
        instance.vibrate.and.stub();
        return instance;
    };
    return VibrationMock;
}());
exports.VibrationMock = VibrationMock;
//# sourceMappingURL=vibration.js.map