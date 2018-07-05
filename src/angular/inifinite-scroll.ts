import { deprecated } from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = ['complete', 'enable', 'waitFor'];

export class InfiniteScrollMock extends BaseMock {

    constructor() {
        super('InfiniteScroll', METHODS);
    }

    @deprecated('new InfiniteScrollMock')
    public static instance(): any {
        return new InfiniteScrollMock();
    }
}
