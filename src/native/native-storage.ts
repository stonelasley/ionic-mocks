import { BaseMock } from '../base.mock';

const METHODS = ['setItem', 'getItem', 'keys', 'remove', 'clear'];

export class NativeStorage extends BaseMock {
    constructor(item?: any, keys?: any) {
        super('NativeStorage', METHODS);
        this.setReturn('setItem', Promise.resolve(item));
        this.setReturn('getItem', Promise.resolve(item));
        this.setReturn('keys', Promise.resolve(keys));
        this.setReturn('remove', Promise.resolve());
        this.setReturn('clear', Promise.resolve());
    }
}
