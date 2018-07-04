import { PopoverControllerMock } from './popover-controller';
import { PopoverMock } from './popover';

describe('PopoverController', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new PopoverControllerMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('create', () => {
        it('should be defined', () => {
            expect(classUnderTest.create).toBeDefined();
        });

        it('should return Popover', () => {
            expect(classUnderTest.create()).toEqual(jasmine.any(Object));
        });

        it('should return provided Popover', () => {
            const popover = new PopoverMock();
            classUnderTest = new PopoverControllerMock(popover);

            const result = classUnderTest.create();

            expect(result).toBe(popover);
        });
    });
});
