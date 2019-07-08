"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vibration_1 = require("./vibration");
describe('VibrationMock', function () {
    var vibration;
    beforeEach(function () {
        vibration = vibration_1.VibrationMock.instance();
    });
    it('should initialise', function () {
        expect(vibration).toBeDefined();
    });
    describe('vibrate', function () {
        it('should have been called', function () {
            vibration.vibrate();
            expect(vibration.vibrate).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=vibration.spec.js.map