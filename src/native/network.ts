import { Observable } from 'rxjs/Observable';

export class NetworkMock {
    public static instance(networkType: string): any {
        let instance = jasmine.createSpyObj('Network', [
            'type',
            'downlinkMax',
            'onChange',
            'onDisconnect',
            'onConnect',
        ]);
        instance.type.and.returnValue(networkType || 'wifi');
        instance.downlinkMax.and.returnValue('42');
        instance.onChange.and.returnValue(Observable.empty());
        instance.onDisconnect.and.returnValue(Observable.empty());
        instance.onConnect.and.returnValue(Observable.empty());
        return instance;
    }
}
