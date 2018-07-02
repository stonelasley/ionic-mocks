import { LoadingMock } from './loading';

describe('LoadingMock', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new LoadingMock();
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
});
