"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormMock = /** @class */ (function () {
    function FormMock() {
    }
    FormMock.instance = function () {
        var instance = jasmine.createSpyObj('Form', [
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