"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var NavParamsMock = /** @class */ (function () {
    function NavParamsMock() {
    }
    NavParamsMock.instance = function (getReturn) {
        var instance = create_spy_1.createSpyObj('NavParams', ['get']);
        instance.get.and.returnValue(getReturn);
        return instance;
    };
    return NavParamsMock;
}());
exports.NavParamsMock = NavParamsMock;
//# sourceMappingURL=nav-params.js.map