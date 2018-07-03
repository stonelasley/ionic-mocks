import { AlertMock } from './alert';

describe('AlertMock', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new AlertMock();
    });

    it('should initialize', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('present', () => {
        it('should be defined', () => {
            expect(classUnderTest.present).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.present().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('dismiss', () => {
        it('should be defined', () => {
            expect(classUnderTest.dismiss).toBeDefined();
        });
    });

    describe('onDidDismiss', () => {
        it('should be defined', () => {
            expect(classUnderTest.onDidDismiss).toBeDefined();
        });
    });
});
