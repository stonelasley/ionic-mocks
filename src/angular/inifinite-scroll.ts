export class InfiniteScrollMock {
    public static instance(): any {
        return jasmine.createSpyObj('InfiniteScroll', ['complete', 'enable', 'waitFor']);
    }
}
