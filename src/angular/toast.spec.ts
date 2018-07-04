import { ToastMock } from './toast';

describe('Toast', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new ToastMock();
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

    describe('dismissAll', () => {
        it('should be defined', () => {
            expect(classUnderTest.dismissAll).toBeDefined();
        });
    });

    describe('setContent', () => {
        it('should be defined', () => {
            expect(classUnderTest.setContent).toBeDefined();
        });
    });

    describe('setSpinner', () => {
        it('should be defined', () => {
            expect(classUnderTest.setSpinner).toBeDefined();
        });
    });
});
