import { ItemSlidingMock } from './item-sliding';

describe('ItemSliding', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new ItemSlidingMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('close', () => {
        it('should be defined', () => {
            expect(classUnderTest.close).toBeDefined();
        });
    });
});
