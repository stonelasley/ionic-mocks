import { StatusBarMock } from './status-bar';

describe('StatusBar', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new StatusBarMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('overlaysWebView', () => {
        it('should be defined', () => {
            expect(classUnderTest.overlaysWebView).toBeDefined();
        });
    });

    describe('styleDefault', () => {
        it('should be defined', () => {
            expect(classUnderTest.styleDefault).toBeDefined();
        });
    });

    describe('styleLightContent', () => {
        it('should be defined', () => {
            expect(classUnderTest.styleLightContent).toBeDefined();
        });
    });

    describe('styleBlackTranslucent', () => {
        it('should be defined', () => {
            expect(classUnderTest.styleBlackTranslucent).toBeDefined();
        });
    });

    describe('styleBlackOpaque', () => {
        it('should be defined', () => {
            expect(classUnderTest.styleBlackOpaque).toBeDefined();
        });
    });

    describe('backgroundColorByName', () => {
        it('should be defined', () => {
            expect(classUnderTest.backgroundColorByName).toBeDefined();
        });
    });

    describe('backgroundColorByHexString', () => {
        it('should be defined', () => {
            expect(classUnderTest.backgroundColorByHexString).toBeDefined();
        });
    });

    describe('hide', () => {
        it('should be defined', () => {
            expect(classUnderTest.hide).toBeDefined();
        });
    });

    describe('show', () => {
        it('should be defined', () => {
            expect(classUnderTest.show).toBeDefined();
        });
    });
});
