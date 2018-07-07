import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import deprecated from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = [
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
];
export class NFCMock extends BaseMock {
    constructor() {
        super('NFC', METHODS);
        this.spyObj.addNdefListener.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.addTagDiscoveredListener.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.addMimeTypeListener.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.addNdefFormatableListener.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.write.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.makeReadyOnly.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.share.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.unshare.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.erase.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.handover.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.stopHandover.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.showSettings.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.enabled.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.bytesToString.and.returnValue('');
        this.spyObj.stringToBytes.and.returnValue([]);
        this.spyObj.bytesToHexString.and.returnValue('');
    }

    @deprecated('new NFCMock()')
    public static instance(): any {
        return new NFCMock();
    }
}
