import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = ['driver', 'ready', 'get', 'set', 'remove', 'clear', 'length', 'keys', 'forEach'];

export class StorageMock extends BaseMock {
    constructor(key: any = 'key1', value: any = 'value1') {
        super('Storage', METHODS);
        this['driver'] = '';
        this.spyObj.ready.and.returnValue(Promise.resolve({}));
        this.spyObj.set.and.returnValue(Promise.resolve());
        this.spyObj.get.and.returnValue(Promise.resolve(value));
        this.spyObj.remove.and.returnValue(Promise.resolve());
        this.spyObj.clear.and.returnValue(Promise.resolve());
        this.spyObj.length.and.returnValue(Promise.resolve(1));
        this.spyObj.keys.and.returnValue(Promise.resolve([key]));
        this.spyObj.forEach.and.returnValue(Promise.resolve());
    }

    @deprecated('new StorageMock()')
    public static instance(key: any = 'key1', value: any = 'value1'): any {
        return new StorageMock(key, value);
    }
}
