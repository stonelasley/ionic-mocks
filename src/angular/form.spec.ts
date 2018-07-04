import { FormMock } from './form';

describe('Form', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new FormMock();
    });

    describe('register', () => {
        it('should be defined', () => {
            expect(classUnderTest.register).toBeDefined();
        });
    });

    describe('deregister', () => {
        it('should be defined', () => {
            expect(classUnderTest.deregister).toBeDefined();
        });
    });

    describe('setAsFocused', () => {
        it('should be defined', () => {
            expect(classUnderTest.setAsFocused).toBeDefined();
        });
    });

    describe('unsetAsFocused', () => {
        it('should be defined', () => {
            expect(classUnderTest.unsetAsFocused).toBeDefined();
        });
    });

    describe('tabFocus', () => {
        it('should be defined', () => {
            expect(classUnderTest.tabFocus).toBeDefined();
        });
    });

    describe('nextId', () => {
        it('should be defined', () => {
            expect(classUnderTest.nextId).toBeDefined();
        });

        it('should return 0', () => {
            expect(classUnderTest.nextId()).toEqual(0);
        });
    });
});
