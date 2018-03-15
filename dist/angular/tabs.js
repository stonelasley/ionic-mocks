"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tab_1 = require("./tab");
var create_spy_1 = require("../utilities/create-spy");
var TabsMock = /** @class */ (function () {
    function TabsMock() {
    }
    TabsMock.instance = function (defaultTab, selectedTab, previousTab) {
        var instance = create_spy_1.createSpyObj('Tabs', [
            'select',
            'getSelected',
            'ngOnDestroy',
            'previousTab',
            'viewCtrl'
        ]);
        instance.select.and.returnValue(defaultTab || tab_1.TabMock.instance());
        instance.getSelected.and.returnValue(selectedTab || tab_1.TabMock.instance());
        instance.previousTab.and.returnValue(previousTab || tab_1.TabMock.instance());
        return instance;
    };
    return TabsMock;
}());
exports.TabsMock = TabsMock;
//# sourceMappingURL=tabs.js.map