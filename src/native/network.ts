import { Observable } from 'rxjs/Observable';
import { createSpyObj } from '../utilities/create-spy';

export class NetworkMock {
    public static instance(networkType: string): any {
        let instance = createSpyObj('Network', [
            'type',
            'downlinkMax',
            'onchange',
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
