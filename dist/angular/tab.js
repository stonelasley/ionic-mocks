"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var TabMock = /** @class */ (function () {
    function TabMock() {
    }
    TabMock.instance = function () {
        return create_spy_1.createSpyObj('Tab', ['linker']);
    };
    return TabMock;
}());
exports.TabMock = TabMock;
//# sourceMappingURL=tab.js.map