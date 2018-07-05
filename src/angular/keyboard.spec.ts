import { KeyboardMock } from './keyboard';

describe('Keyboard', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new KeyboardMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('close', () => {
        it('should be defined', () => {
            expect(classUnderTest.close).toBeDefined();
        });
    });

    describe('didHide', () => {
        it('should be defined', () => {
            expect(classUnderTest.didHide).toBeDefined();
        });
    });

    describe('didShow', () => {
        it('should be defined', () => {
            expect(classUnderTest.didShow).toBeDefined();
        });
    });

    describe('eventsAvailable', () => {
        it('should be defined', () => {
            expect(classUnderTest.eventsAvailable).toBeDefined();
        });
    });

    describe('hasFocusedTextInput', () => {
        it('should be defined', () => {
            expect(classUnderTest.hasFocusedTextInput).toBeDefined();
        });
    });

    describe('isOpen', () => {
        it('should be defined', () => {
            expect(classUnderTest.isOpen).toBeDefined();
        });

        it('should be false', () => {
            expect(classUnderTest.isOpen()).toBe(false);
        });
    });

    describe('onClose', () => {
        it('should be defined', () => {
            expect(classUnderTest.onClose).toBeDefined();
        });
    });

    describe('willHide', () => {
        it('should be defined', () => {
            expect(classUnderTest.willHide).toBeDefined();
        });
    });

    describe('willShow', () => {
        it('should be defined', () => {
            expect(classUnderTest.willShow).toBeDefined();
        });
    });
});
