"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var action_sheet_1 = require("./action-sheet");
var ActionSheetControllerMock = /** @class */ (function () {
    function ActionSheetControllerMock() {
    }
    ActionSheetControllerMock.instance = function (actionSheet) {
        var instance = jasmine.createSpyObj('ActionSheetController', ['create']);
        instance.create.and.returnValue(actionSheet || action_sheet_1.ActionSheetMock.instance());
        return instance;
    };
    return ActionSheetControllerMock;
}());
exports.ActionSheetControllerMock = ActionSheetControllerMock;
//# sourceMappingURL=action-sheet-controller.js.map