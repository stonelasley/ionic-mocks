"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PopoverMock = /** @class */ (function () {
    function PopoverMock() {
    }
    PopoverMock.instance = function () {
        var instance = jasmine.createSpyObj('Popover', ['present', 'dismissAll', 'setContent', 'setSpinner']);
        instance.present.and.returnValue(Promise.resolve());
        return instance;
    };
    return PopoverMock;
}());
exports.PopoverMock = PopoverMock;
//# sourceMappingURL=popover.js.map