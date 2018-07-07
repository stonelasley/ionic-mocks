import { BaseMock } from '../base.mock';

const METHODS = ['setItem', 'getItem', 'keys', 'remove', 'clear'];

export class NativeStorage extends BaseMock {
    constructor(item?: any, keys?: any) {
        super('NativeStorage', METHODS);
        this.spyObj.setItem.and.returnValue(Promise.resolve(item));
        this.spyObj.getItem.and.returnValue(Promise.resolve(item));
        this.spyObj.keys.and.returnValue(Promise.resolve(keys));
        this.spyObj.remove.and.returnValue(Promise.resolve());
        this.spyObj.clear.and.returnValue(Promise.resolve());
    }
}
