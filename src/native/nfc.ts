import { EMPTY } from 'rxjs';

export class NFCMock {
    public static instance(): any {
        let instance = jasmine.createSpyObj('NFC', [
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
        instance.addNdefListener.and.returnValue(EMPTY);
        instance.addTagDiscoveredListener.and.returnValue(EMPTY);
        instance.addMimeTypeListener.and.returnValue(EMPTY);
        instance.addNdefFormatableListener.and.returnValue(EMPTY);
        instance.write.and.returnValue(EMPTY);
        instance.makeReadyOnly.and.returnValue(EMPTY);
        instance.share.and.returnValue(EMPTY);
        instance.unshare.and.returnValue(EMPTY);
        instance.erase.and.returnValue(EMPTY);
        instance.handover.and.returnValue(EMPTY);
        instance.stopHandover.and.returnValue(EMPTY);
        instance.showSettings.and.returnValue(EMPTY);
        instance.enabled.and.returnValue(EMPTY);
        instance.bytesToString.and.returnValue('');
        instance.stringToBytes.and.returnValue([]);
        instance.bytesToHexString.and.returnValue('');

        return instance;
    }
}
