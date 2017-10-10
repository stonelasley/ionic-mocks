"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusBarMock = /** @class */ (function () {
    function StatusBarMock() {
    }
    StatusBarMock.instance = function () {
        var instance = jasmine.createSpyObj('StatusBar', [
            'overlaysWebView',
            'styleDefault',
            'styleLightContent',
            'styleBlackTranslucent',
            'styleBlackOpaque',
            'backgroundColorByName',
            'backgroundColorByHexString',
            'hide',
            'show',
        ]);
        instance['isVisible'] = true;
        return instance;
    };
    return StatusBarMock;
}());
exports.StatusBarMock = StatusBarMock;
//# sourceMappingURL=status-bar.js.map