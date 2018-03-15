"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var FormMock = /** @class */ (function () {
    function FormMock() {
    }
    FormMock.instance = function () {
        var instance = create_spy_1.createSpyObj('Form', [
            'register',
            'nextId',
            'deregister',
            'setAsFocused',
            'unsetAsFocused',
            'tabFocus'
        ]);
        instance.nextId.and.returnValue(0);
        return instance;
    };
    return FormMock;
}());
exports.FormMock = FormMock;
//# sourceMappingURL=form.js.map