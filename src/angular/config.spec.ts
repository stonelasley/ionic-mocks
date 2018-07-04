import { ConfigMock } from './config';

describe('Config', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new ConfigMock();
    });

    describe('get', () => {
        it('should be defined', () => {
            expect(classUnderTest.get).toBeDefined();
        });

        it('should return empty string', () => {
            expect(classUnderTest.get()).toEqual('');
        });
    });

    describe('getBoolean', () => {
        it('should be defined', () => {
            expect(classUnderTest.getBoolean).toBeDefined();
        });

        it('should return true', () => {
            expect(classUnderTest.getBoolean()).toEqual(true);
        });
    });

    describe('getNumber', () => {
        it('should be defined', () => {
            expect(classUnderTest.getNumber).toBeDefined();
        });

        it('should return 0', () => {
            expect(classUnderTest.getNumber()).not.toBeNaN();
        });
    });

    describe('set', () => {
        it('should be defined', () => {
            expect(classUnderTest.set).toBeDefined();
        });
    });

    describe('settings', () => {
        it('should be defined', () => {
            expect(classUnderTest.settings).toBeDefined();
        });
    });

    describe('setModeConfig', () => {
        it('should be defined', () => {
            expect(classUnderTest.setModeConfig).toBeDefined();
        });
    });

    describe('getModeConfig', () => {
        it('should be defined', () => {
            expect(classUnderTest.getModeConfig).toBeDefined();
        });
    });

    describe('setTransition', () => {
        it('should be defined', () => {
            expect(classUnderTest.setTransition).toBeDefined();
        });
    });

    describe('getTransition', () => {
        it('should be defined', () => {
            expect(classUnderTest.getTransition).toBeDefined();
        });
    });
});
