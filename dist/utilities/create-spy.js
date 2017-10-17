"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createSpyObj(baseName, methodNames) {
    var obj = {};
    for (var i = 0; i < methodNames.length; i++) {
        obj[methodNames[i]] = jasmine.createSpy(baseName, function () { });
    }
    return obj;
}
exports.createSpyObj = createSpyObj;
//# sourceMappingURL=create-spy.js.map