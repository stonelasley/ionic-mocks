import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

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
        instance.addNdefListener.and.returnValue(EmptyObservable.create());
        instance.addTagDiscoveredListener.and.returnValue(EmptyObservable.create());
        instance.addMimeTypeListener.and.returnValue(EmptyObservable.create());
        instance.addNdefFormatableListener.and.returnValue(EmptyObservable.create());
        instance.write.and.returnValue(EmptyObservable.create());
        instance.makeReadyOnly.and.returnValue(EmptyObservable.create());
        instance.share.and.returnValue(EmptyObservable.create());
        instance.unshare.and.returnValue(EmptyObservable.create());
        instance.erase.and.returnValue(EmptyObservable.create());
        instance.handover.and.returnValue(EmptyObservable.create());
        instance.stopHandover.and.returnValue(EmptyObservable.create());
        instance.showSettings.and.returnValue(EmptyObservable.create());
        instance.enabled.and.returnValue(EmptyObservable.create());
        instance.bytesToString.and.returnValue('');
        instance.stringToBytes.and.returnValue([]);
        instance.bytesToHexString.and.returnValue('');

        return instance;
    }
}
