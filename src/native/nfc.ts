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
        this.setReturn('addNdefListener', ArrayObservable.of(undefined));
        this.setReturn('addTagDiscoveredListener', ArrayObservable.of(undefined));
        this.setReturn('addMimeTypeListener', ArrayObservable.of(undefined));
        this.setReturn('addNdefFormatableListener', ArrayObservable.of(undefined));
        this.setReturn('write', ArrayObservable.of(undefined));
        this.setReturn('makeReadyOnly', ArrayObservable.of(undefined));
        this.setReturn('share', ArrayObservable.of(undefined));
        this.setReturn('unshare', ArrayObservable.of(undefined));
        this.setReturn('erase', ArrayObservable.of(undefined));
        this.setReturn('handover', ArrayObservable.of(undefined));
        this.setReturn('stopHandover', ArrayObservable.of(undefined));
        this.setReturn('showSettings', ArrayObservable.of(undefined));
        this.setReturn('enabled', ArrayObservable.of(undefined));
        this.setReturn('bytesToString', '');
        this.setReturn('stringToBytes', []);
        this.setReturn('bytesToHexString', '');
    }

    @deprecated('new NFCMock()')
    public static instance(): any {
        return new NFCMock();
    }
}
