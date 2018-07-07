import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = ['driver', 'ready', 'get', 'set', 'remove', 'clear', 'length', 'keys', 'forEach'];

export class StorageMock extends BaseMock {
    constructor(key: any = 'key1', value: any = 'value1') {
        super('Storage', METHODS);
        this.setProperty('driver', '');
        this.setReturn('ready', Promise.resolve({}));
        this.setReturn('set', Promise.resolve());
        this.setReturn('get', Promise.resolve(value));
        this.setReturn('remove', Promise.resolve());
        this.setReturn('clear', Promise.resolve());
        this.setReturn('length', Promise.resolve(1));
        this.setReturn('keys', Promise.resolve([key]));
        this.setReturn('forEach', Promise.resolve());
    }

    @deprecated('new StorageMock()')
    public static instance(key: any = 'key1', value: any = 'value1'): any {
        return new StorageMock(key, value);
    }
}
