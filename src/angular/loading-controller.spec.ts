import { LoadingControllerMock } from './loading-controller';
import { LoadingMock } from './loading';

describe('LoadingController', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new LoadingControllerMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });


    describe('create', () => {

        it('should exist', () => {
            expect(classUnderTest.create).toBeDefined();
        });

        it('should return a Loading', () => {
            let result = classUnderTest.create();

            expect(result).toBeDefined();
            expect(result.present).toBeDefined();
        });

        it('should return provided Loading', () => {
            let loading = new LoadingMock();
            classUnderTest = new LoadingControllerMock(loading);

            let result = classUnderTest.create();

            expect(result).toBe(loading);
        });
    });

});
