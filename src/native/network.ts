import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import { deprecated } from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = ['type', 'downlinkMax', 'onchange', 'onDisconnect', 'onConnect'];

export class NetworkMock extends BaseMock {
    constructor(networkType?: string) {
        super('Network', METHODS);
        this.spyObj.type.and.returnValue(networkType || 'wifi');
        this.spyObj.downlinkMax.and.returnValue('42');
        this.spyObj.onchange.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.onDisconnect.and.returnValue(ArrayObservable.of(undefined));
        this.spyObj.onConnect.and.returnValue(ArrayObservable.of(undefined));

    }

    @deprecated('new NetworkMock()')
    public static instance(networkType?: string): any {
        return new NetworkMock(networkType);
    }
}
