import { Observable, of } from 'rxjs';

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
        instance.onChange.and.returnValue(of(null));
        instance.onDisconnect.and.returnValue(of(null));
        instance.onConnect.and.returnValue(of(null));
        return instance;
    }
}
