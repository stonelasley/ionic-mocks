import { MenuMock } from './menu';

describe('Menu', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new MenuMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('content', () => {
        it('should be defined', () => {
            expect(classUnderTest.content).toBeDefined();
        });

        it('should return "menu content"', () => {
            expect(classUnderTest.content).toEqual('menu content');
        });
    });

    describe('enabled', () => {
        it('should be defined', () => {
            expect(classUnderTest.enabled).toBeDefined();
        });

        it('should return true', () => {
            expect(classUnderTest.enabled).toBe(true);
        });
    });

    describe('id', () => {
        it('should be defined', () => {
            expect(classUnderTest.id).toBeDefined();
        });

        it('should return "menuId"', () => {
            expect(classUnderTest.id).toEqual('menuId');
        });
    });

    describe('persistent', () => {
        it('should be defined', () => {
            expect(classUnderTest.persistent).toBeDefined();
        });

        it('should return true', () => {
            expect(classUnderTest.persistent).toBe(true);
        });
    });

    describe('side', () => {
        it('should be defined', () => {
            expect(classUnderTest.side).toBeDefined();
        });

        it('should return "left"', () => {
            expect(classUnderTest.side).toEqual('left');
        });
    });

    describe('swipeEnabled', () => {
        it('should be defined', () => {
            expect(classUnderTest.swipeEnabled).toBeDefined();
        });

        it('should be true', () => {
            expect(classUnderTest.swipeEnabled).toBe(true);
        });
    });

    describe('type', () => {
        it('should be defined', () => {
            expect(classUnderTest.type).toBeDefined();
        });

        it('should return "reveal"', () => {
            expect(classUnderTest.type).toEqual('reveal');
        });
    });

    describe('open', () => {
        it('should be defined', () => {
            expect(classUnderTest.open).toBeDefined();
        });

        it('should return true', done => {
            classUnderTest.open().then(result => {
                expect(result).toBe(true);
                done();
            });
        });
    });

    describe('close', () => {
        it('should be defined', () => {
            expect(classUnderTest.close).toBeDefined();
        });

        it('should return true', done => {
            classUnderTest.close().then(result => {
                expect(result).toBe(true);
                done();
            });
        });
    });
});
