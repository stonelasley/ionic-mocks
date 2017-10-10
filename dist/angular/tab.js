"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TabMock = /** @class */ (function () {
    function TabMock() {
    }
    TabMock.instance = function () {
        return jasmine.createSpyObj('Tab', ['linker']);
    };
    return TabMock;
}());
exports.TabMock = TabMock;
//# sourceMappingURL=tab.js.map