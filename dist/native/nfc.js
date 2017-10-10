"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var NFCMock = /** @class */ (function () {
    function NFCMock() {
    }
    NFCMock.instance = function () {
        var instance = jasmine.createSpyObj('NFC', [
            'addNdefListener',
            'addTagDiscoveredListener',
            'addMimeTypeListener',
            'addNdefFormatableListener',
            'write',
            'makeReadyOnly',
            'share',
            'unshare',
            'erase',
            'handover',
            'stopHandover',
            'showSettings',
            'enabled',
            'bytesToString',
            'stringToBytes',
            'bytesToHexString'
        ]);
        instance.addNdefListener.and.returnValue(Observable_1.Observable.empty());
        instance.addTagDiscoveredListener.and.returnValue(Observable_1.Observable.empty());
        instance.addMimeTypeListener.and.returnValue(Observable_1.Observable.empty());
        instance.addNdefFormatableListener.and.returnValue(Observable_1.Observable.empty());
        instance.write.and.returnValue(Observable_1.Observable.empty());
        instance.makeReadyOnly.and.returnValue(Observable_1.Observable.empty());
        instance.share.and.returnValue(Observable_1.Observable.empty());
        instance.unshare.and.returnValue(Observable_1.Observable.empty());
        instance.erase.and.returnValue(Observable_1.Observable.empty());
        instance.handover.and.returnValue(Observable_1.Observable.empty());
        instance.stopHandover.and.returnValue(Observable_1.Observable.empty());
        instance.showSettings.and.returnValue(Observable_1.Observable.empty());
        instance.enabled.and.returnValue(Observable_1.Observable.empty());
        instance.bytesToString.and.returnValue('');
        instance.stringToBytes.and.returnValue([]);
        instance.bytesToHexString.and.returnValue('');
        return instance;
    };
    return NFCMock;
}());
exports.NFCMock = NFCMock;
//# sourceMappingURL=nfc.js.map