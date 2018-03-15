"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var ItemSlidingMock = /** @class */ (function () {
    function ItemSlidingMock() {
    }
    ItemSlidingMock.instance = function () {
        return create_spy_1.createSpyObj('ItemSliding', ['close']);
    };
    return ItemSlidingMock;
}());
exports.ItemSlidingMock = ItemSlidingMock;
//# sourceMappingURL=item-sliding.js.map