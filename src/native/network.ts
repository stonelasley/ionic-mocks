import { createSpyObj } from '../utilities/create-spy';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

export class NetworkMock {
    public static instance(networkType: string): any {
        let instance = createSpyObj('Network', [
            'type',
            'downlinkMax',
            'onChange',
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
