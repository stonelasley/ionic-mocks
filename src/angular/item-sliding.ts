export class ItemSlidingMock {
    public static instance(): any {
        return jasmine.createSpyObj('ItemSliding', ['close']);
    }
}
