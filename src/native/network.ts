import { EMPTY } from 'rxjs';

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
        instance.onChange.and.returnValue(EMPTY);
        instance.onDisconnect.and.returnValue(EMPTY);
        instance.onConnect.and.returnValue(EMPTY);
        return instance;
    }
}
