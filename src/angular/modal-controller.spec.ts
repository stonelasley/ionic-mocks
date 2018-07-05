import { ModalControllerMock } from './modal-controller';
import { ModalMock } from './modal';

describe('ModalController', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new ModalControllerMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('create', () => {

        it('should exist', () => {
            expect(classUnderTest.create).toBeDefined();
        });

        it('should return a Modal', () => {
            let result = classUnderTest.create();

            expect(result).toBeDefined();
            expect(result.present).toBeDefined();
        });

        it('should return provided Modal', () => {
            let modal = new ModalMock();
            classUnderTest = new ModalControllerMock(modal);

            let result = classUnderTest.create();

            expect(result).toBe(modal);
        });
    });

});
