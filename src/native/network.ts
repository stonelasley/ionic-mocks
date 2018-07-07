import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import { deprecated } from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = ['type', 'downlinkMax', 'onchange', 'onDisconnect', 'onConnect'];

export class NetworkMock extends BaseMock {
    constructor(networkType?: string) {
        super('Network', METHODS);
        this.setReturn('type', networkType || 'wifi');
        this.setReturn('downlinkMax', '42');
        this.setReturn('onchange', ArrayObservable.of(undefined));
        this.setReturn('onDisconnect', ArrayObservable.of(undefined));
        this.setReturn('onConnect', ArrayObservable.of(undefined));
    }

    @deprecated('new NetworkMock()')
    public static instance(networkType?: string): any {
        return new NetworkMock(networkType);
    }
}
