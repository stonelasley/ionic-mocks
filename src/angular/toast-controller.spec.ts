import { ToastControllerMock } from './toast-controller';
import { ToastMock } from './toast';

describe('ToastController', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new ToastControllerMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('create', () => {
        it('should exist', () => {
            expect(classUnderTest.create).toBeDefined();
        });

        it('should return a Toast', () => {
            let result = classUnderTest.create();

            expect(result).toBeDefined();
            expect(result.present).toBeDefined();
        });

        it('should return provided Toast', () => {
            let toast = new ToastMock();
            classUnderTest = new ToastControllerMock(toast);

            let result = classUnderTest.create();

            expect(result).toBe(toast);
        });
    });
});
