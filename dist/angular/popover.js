"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var PopoverMock = /** @class */ (function () {
    function PopoverMock() {
    }
    PopoverMock.instance = function () {
        var instance = create_spy_1.createSpyObj('Popover', ['present', 'dismissAll', 'setContent', 'setSpinner']);
        instance.present.and.returnValue(Promise.resolve());
        return instance;
    };
    return PopoverMock;
}());
exports.PopoverMock = PopoverMock;
//# sourceMappingURL=popover.js.map