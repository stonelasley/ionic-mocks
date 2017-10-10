"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavParamsMock = /** @class */ (function () {
    function NavParamsMock() {
    }
    NavParamsMock.instance = function (getReturn) {
        var instance = jasmine.createSpyObj('NavParams', ['get']);
        instance.get.and.returnValue(getReturn);
        return instance;
    };
    return NavParamsMock;
}());
exports.NavParamsMock = NavParamsMock;
//# sourceMappingURL=nav-params.js.map