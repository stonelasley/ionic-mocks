"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemSlidingMock = /** @class */ (function () {
    function ItemSlidingMock() {
    }
    ItemSlidingMock.instance = function () {
        return jasmine.createSpyObj('ItemSliding', ['close']);
    };
    return ItemSlidingMock;
}());
exports.ItemSlidingMock = ItemSlidingMock;
//# sourceMappingURL=item-sliding.js.map