import { createSpyObj } from '../utilities/create-spy';

export class InfiniteScrollMock {
    public static instance(): any {
        return createSpyObj('InfiniteScroll', ['complete', 'enable', 'waitFor']);
    }
}
