import {PlatformMock} from './platform';

describe('PlatformMock', () => {
    let classUnderTest;

    beforeEach(() => {
        classUnderTest = PlatformMock.instance();
    });

    describe('dir', () => {
        it('should return empty string', () => {
            expect(classUnderTest.dir()).toEqual('');
        });
    });

    describe('hasFocus', () => {
        it('should return true', () => {
            expect(classUnderTest.hasFocus()).toBeTruthy();
        });
    });

    describe('registerListener', () => {
        it('should return function', () => {
            expect(classUnderTest.registerListener()).toEqual(jasmine.any(Function));
        });
    });
});
