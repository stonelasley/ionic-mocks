import { TabMock } from './tab';

describe('Tab', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new TabMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('linker', () => {
        it('should be defined', () => {
            expect(classUnderTest.linker).toBeDefined();
        });
    });
});
