import { ThreeDeeTouchMock } from './three-dee-touch';

describe('ThreeDeeTouch', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new ThreeDeeTouchMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('isAvailable', () => {
        it('should be defined', () => {
            expect(classUnderTest.isAvailable).toBeDefined();
        });

        it('should return true', done => {
            classUnderTest.isAvailable().then(result => {
                expect(result).toBe(true);
                done();
            });
        });
    });

    describe('watchForTouches', () => {
        it('should be defined', () => {
            expect(classUnderTest.watchForTouches).toBeDefined();
        });

        it('should return Observable Object', done => {
            classUnderTest.watchForTouches().subscribe(result => {
                expect(result).toEqual({});
                done();
            });
        });
    });

    describe('configureQuickActions', () => {
        it('should be defined', () => {
            expect(classUnderTest.configureQuickActions).toBeDefined();
        });
    });

    describe('onHomeIconPressed', () => {
        it('should be defined', () => {
            expect(classUnderTest.onHomeIconPressed).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.onHomeIconPressed().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('enableLinkPreview', () => {
        it('should be defined', () => {
            expect(classUnderTest.enableLinkPreview).toBeDefined();
        });
    });

    describe('disableLinkPreview', () => {
        it('should be defined', () => {
            expect(classUnderTest.disableLinkPreview).toBeDefined();
        });
    });
});
