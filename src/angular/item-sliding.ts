import { deprecated } from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = ['close'];

export class ItemSlidingMock extends BaseMock {
    constructor() {
        super('ItemSliding', METHODS);
    }

    @deprecated('new ItemSlidingMock()')
    public static instance(): any {
        return new ItemSlidingMock();
    }
}
