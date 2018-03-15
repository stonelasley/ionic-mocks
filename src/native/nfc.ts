import { Observable } from 'rxjs/Observable';
import { createSpyObj } from '../utilities/create-spy';

export class NFCMock {
    public static instance(): any {
        let instance = createSpyObj('NFC', [
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
        instance.addNdefListener.and.returnValue(Observable.empty());
        instance.addTagDiscoveredListener.and.returnValue(Observable.empty());
        instance.addMimeTypeListener.and.returnValue(Observable.empty());
        instance.addNdefFormatableListener.and.returnValue(Observable.empty());
        instance.write.and.returnValue(Observable.empty());
        instance.makeReadyOnly.and.returnValue(Observable.empty());
        instance.share.and.returnValue(Observable.empty());
        instance.unshare.and.returnValue(Observable.empty());
        instance.erase.and.returnValue(Observable.empty());
        instance.handover.and.returnValue(Observable.empty());
        instance.stopHandover.and.returnValue(Observable.empty());
        instance.showSettings.and.returnValue(Observable.empty());
        instance.enabled.and.returnValue(Observable.empty());
        instance.bytesToString.and.returnValue('');
        instance.stringToBytes.and.returnValue([]);
        instance.bytesToHexString.and.returnValue('');

        return instance;
    }
}
