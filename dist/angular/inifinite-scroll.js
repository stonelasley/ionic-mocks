"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var InfiniteScrollMock = /** @class */ (function () {
    function InfiniteScrollMock() {
    }
    InfiniteScrollMock.instance = function () {
        return create_spy_1.createSpyObj('InfiniteScroll', ['complete', 'enable', 'waitFor']);
    };
    return InfiniteScrollMock;
}());
exports.InfiniteScrollMock = InfiniteScrollMock;
//# sourceMappingURL=inifinite-scroll.js.map