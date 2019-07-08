"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var menu_1 = require("./menu");
var MenuControllerMock = /** @class */ (function () {
    function MenuControllerMock() {
    }
    MenuControllerMock.instance = function (menu) {
        var m = menu || menu_1.MenuMock.instance();
        var instance = create_spy_1.createSpyObj('MenuController', ['close', 'enable', 'get', 'getMenus', 'getOpen', 'isEnabled', 'isOpen', 'open', 'swipeEnabled', 'toggle']);
        instance.close.and.returnValue(Promise.resolve());
        instance.enable.and.returnValue(m);
        instance.get.and.returnValue(m);
        instance.getMenus.and.returnValue([m]);
        instance.getOpen.and.returnValue(m);
        instance.isEnabled.and.returnValue(true);
        instance.isOpen.and.returnValue(false);
        instance.open.and.returnValue(Promise.resolve());
        instance.swipeEnable.and.returnValue(m);
        instance.toggle.and.returnValue(Promise.resolve());
        return instance;
    };
    return MenuControllerMock;
}());
exports.MenuControllerMock = MenuControllerMock;
//# sourceMappingURL=menu-controller.js.map