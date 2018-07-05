import { HapticMock } from './haptic';

describe('Haptic', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new HapticMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('available', () => {
        it('should be defined', () => {
            expect(classUnderTest.available).toBeDefined();
        });

        it('should be true', () => {
            expect(classUnderTest.available()).toBe(true);
        });
    });

    describe('gestureSelectionChanged', () => {
        it('should be defined', () => {
            expect(classUnderTest.gestureSelectionChanged).toBeDefined();
        });
    });

    describe('gestureSelectionEnd', () => {
        it('should be defined', () => {
            expect(classUnderTest.gestureSelectionEnd).toBeDefined();
        });
    });

    describe('gestureSelectionStart', () => {
        it('should be defined', () => {
            expect(classUnderTest.gestureSelectionStart).toBeDefined();
        });
    });

    describe('impact', () => {
        it('should be defined', () => {
            expect(classUnderTest.impact).toBeDefined();
        });
    });

    describe('notification', () => {
        it('should be defined', () => {
            expect(classUnderTest.notification).toBeDefined();
        });
    });

    describe('selection', () => {
        it('should be defined', () => {
            expect(classUnderTest.selection).toBeDefined();
        });
    });
});
