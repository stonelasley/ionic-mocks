import { ModalMock } from './modal';

describe('Modal', () => {

    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new ModalMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('present', () => {
        it('should be defined', () => {
            expect(classUnderTest.present).toBeDefined();
        });

        it('should return empty Promise', done => {
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
