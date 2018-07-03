import { BaseMock } from './../base.mock';
import { deprecated } from 'deprecated-decorator';

const METHODS = ['subscribe', 'publish', 'unsubscribe'];

export class EventsMock extends BaseMock {
    constructor() {
        super('Events', METHODS);
    }

    @deprecated('new EventsMock()')
    public static instance(): any {
        return new EventsMock();
    }
}
