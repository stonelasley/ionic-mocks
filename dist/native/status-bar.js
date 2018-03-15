"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var StatusBarMock = /** @class */ (function () {
    function StatusBarMock() {
    }
    StatusBarMock.instance = function () {
        var instance = create_spy_1.createSpyObj('StatusBar', [
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