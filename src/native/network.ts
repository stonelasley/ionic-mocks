import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

export class NetworkMock {
    public static instance(networkType: string): any {
        let instance = jasmine.createSpyObj('Network', [
            'type',
            'downlinkMax',
            'onchange',
            'onDisconnect',
            'onConnect',
        ]);
        instance.type.and.returnValue(networkType || 'wifi');
        instance.downlinkMax.and.returnValue('42');
        instance.onChange.and.returnValue(EmptyObservable.create());
        instance.onDisconnect.and.returnValue(EmptyObservable.create());
        instance.onConnect.and.returnValue(EmptyObservable.create());
        return instance;
    }
}