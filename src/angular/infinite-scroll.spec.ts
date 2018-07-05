import { InfiniteScrollMock } from './inifinite-scroll';

describe('InfiniteScroll', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new InfiniteScrollMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('complete', () => {
        it('should be defined', () => {
            expect(classUnderTest.complete).toBeDefined();
        });
    });

    describe('enable', () => {
        it('should be defined', () => {
            expect(classUnderTest.enable).toBeDefined();
        });
    });

    describe('waitFor', () => {
        it('should be defined', () => {
            expect(classUnderTest.waitFor).toBeDefined();
        });
    });
});
