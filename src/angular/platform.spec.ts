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
        let callback = () => 'foo';

        it('should return function that was passed in', () => {
            expect(classUnderTest.registerListener(callback).call()).toEqual('foo');
        });
    });
});
