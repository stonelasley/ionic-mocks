import { KeyboardMock } from './keyboard';

describe('Keyboard', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new KeyboardMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('show', () => {
        it('should be defined', () => {
            expect(classUnderTest.show).toBeDefined();
        });
    });

    describe('close', () => {
        it('should be defined', () => {
            expect(classUnderTest.close).toBeDefined();
        });
    });

    describe('disableScroll', () => {
        it('should be defined', () => {
            expect(classUnderTest.disableScroll).toBeDefined();
        });
    });

    describe('onKeyboardShow', () => {
        it('should be defined', () => {
            expect(classUnderTest.onKeyboardShow).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.onKeyboardShow().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('onKeyboardHide', () => {
        it('should be defined', () => {
            expect(classUnderTest.onKeyboardHide).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.onKeyboardHide().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
