"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var ConfigMock = /** @class */ (function () {
    function ConfigMock() {
    }
    ConfigMock.instance = function () {
        var instance = create_spy_1.createSpyObj('Config', [
            'get',
            'getBoolean',
            'getNumber',
            'set',
            'settings',
            'setModeConfig',
            'getModeConfig',
            'setTransition',
            'getTransition'
        ]);
        instance.get.and.returnValue('');
        instance.getBoolean.and.returnValue(true);
        instance.getNumber.and.returnValue(0);
        return instance;
    };
    return ConfigMock;
}());
exports.ConfigMock = ConfigMock;
//# sourceMappingURL=config.js.map