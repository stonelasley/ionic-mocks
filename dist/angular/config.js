"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigMock = /** @class */ (function () {
    function ConfigMock() {
    }
    ConfigMock.instance = function () {
        var instance = jasmine.createSpyObj('Config', [
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