import { SplashScreenMock } from './splash-screen';

describe('SplashScreen', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new SplashScreenMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('show', () => {
        it('should be defined', () => {
            expect(classUnderTest.show).toBeDefined();
        });
    });

    describe('hide', () => {
        it('should be defined', () => {
            expect(classUnderTest.hide).toBeDefined();
        });
    });
});


