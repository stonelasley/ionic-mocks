import { Observable, of } from 'rxjs';

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
        instance.addNdefListener.and.returnValue(of(null));
        instance.addTagDiscoveredListener.and.returnValue(of(null));
        instance.addMimeTypeListener.and.returnValue(of(null));
        instance.addNdefFormatableListener.and.returnValue(of(null));
        instance.write.and.returnValue(of(null));
        instance.makeReadyOnly.and.returnValue(of(null));
        instance.share.and.returnValue(of(null));
        instance.unshare.and.returnValue(of(null));
        instance.erase.and.returnValue(of(null));
        instance.handover.and.returnValue(of(null));
        instance.stopHandover.and.returnValue(of(null));
        instance.showSettings.and.returnValue(of(null));
        instance.enabled.and.returnValue(of(null));
        instance.bytesToString.and.returnValue('');
        instance.stringToBytes.and.returnValue([]);
        instance.bytesToHexString.and.returnValue('');

        return instance;
    }
}
