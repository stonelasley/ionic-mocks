"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InfiniteScrollMock = /** @class */ (function () {
    function InfiniteScrollMock() {
    }
    InfiniteScrollMock.instance = function () {
        return jasmine.createSpyObj('InfiniteScroll', ['complete', 'enable', 'waitFor']);
    };
    return InfiniteScrollMock;
}());
exports.InfiniteScrollMock = InfiniteScrollMock;
//# sourceMappingURL=inifinite-scroll.js.map