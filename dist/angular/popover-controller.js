"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var popover_1 = require("./popover");
var PopoverControllerMock = /** @class */ (function () {
    function PopoverControllerMock() {
    }
    PopoverControllerMock.instance = function (popOver) {
        var instance = jasmine.createSpyObj('PopoverController', ['create']);
        instance.create.and.returnValue(popOver || popover_1.PopoverMock.instance());
        return instance;
    };
    return PopoverControllerMock;
}());
exports.PopoverControllerMock = PopoverControllerMock;
//# sourceMappingURL=popover-controller.js.map