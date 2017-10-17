"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var modal_1 = require("./modal");
var ModalControllerMock = /** @class */ (function () {
    function ModalControllerMock() {
    }
    ModalControllerMock.instance = function (modalMock) {
        var instance = create_spy_1.createSpyObj('ModalController', ['create']);
        instance.create.and.returnValue(modalMock || modal_1.ModalMock.instance());
        return instance;
    };
    return ModalControllerMock;
}());
exports.ModalControllerMock = ModalControllerMock;
//# sourceMappingURL=modal-controller.js.map