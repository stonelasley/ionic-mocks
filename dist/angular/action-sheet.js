"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionSheetMock = /** @class */ (function () {
    function ActionSheetMock() {
    }
    ActionSheetMock.instance = function () {
        var instance = jasmine.createSpyObj('ActionSheet', ['present', 'dismiss']);
        instance.present.and.returnValue(Promise.resolve());
        instance.dismiss.and.returnValue(Promise.resolve());
        return instance;
    };
    return ActionSheetMock;
}());
exports.ActionSheetMock = ActionSheetMock;
//# sourceMappingURL=action-sheet.js.map