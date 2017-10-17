"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var ActionSheetMock = /** @class */ (function () {
    function ActionSheetMock() {
    }
    ActionSheetMock.instance = function () {
        var instance = create_spy_1.createSpyObj('ActionSheet', ['present', 'dismiss']);
        instance.present.and.returnValue(Promise.resolve());
        instance.dismiss.and.returnValue(Promise.resolve());
        return instance;
    };
    return ActionSheetMock;
}());
exports.ActionSheetMock = ActionSheetMock;
//# sourceMappingURL=action-sheet.js.map