import { NavParamsMock } from './nav-params';

describe('NavParams', () => {

    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new NavParamsMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    it('should return undefined', () => {
        expect(classUnderTest.get()).toBeUndefined();
    });

    it('should return provided value', () => {
        const expected = 'val';
        classUnderTest = new NavParamsMock(expected);

        const result = classUnderTest.get('key');

        expect(result).toBe(expected);
    });
});
