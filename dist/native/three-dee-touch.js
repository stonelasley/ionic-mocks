"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var ThreeDeeTouchMock = /** @class */ (function () {
    function ThreeDeeTouchMock() {
    }
    ThreeDeeTouchMock.instance = function () {
        var instance = jasmine.createSpyObj('ThreeDeeTouch', [
            'isAvailable',
            'watchForTouches',
            'configureQuickActions',
            'onHomeIconPressed',
            'enableLinkPreview',
            'disableLinkPreview'
        ]);
        instance.isAvailable.and.returnValue(Promise.resolve(true));
        instance.watchForTouches.and.returnValue(Observable_1.Observable.of({}));
        instance.onHomeIconPressed.and.returnValue(Observable_1.Observable.empty());
        return instance;
    };
    return ThreeDeeTouchMock;
}());
exports.ThreeDeeTouchMock = ThreeDeeTouchMock;
//# sourceMappingURL=three-dee-touch.js.map