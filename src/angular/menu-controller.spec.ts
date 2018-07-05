import { MenuControllerMock } from './menu-controller';
import { MenuMock } from './menu';

describe('MenuController', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new MenuControllerMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('close', () => {
        it('should be defined', () => {
            expect(classUnderTest.close).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.close().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('enable', () => {
        it('should be defined', () => {
            expect(classUnderTest.enable).toBeDefined();
        });

        it('should return Menu', () => {
            expect(classUnderTest.enable()).toEqual(jasmine.any(Object));
        });

        it('should return passed Menu', () => {
            const menu = new MenuMock();
            classUnderTest = new MenuControllerMock(menu);

            expect(classUnderTest.enable()).toBe(menu);
        });
    });

    describe('get', () => {
        it('should be defined', () => {
            expect(classUnderTest.get).toBeDefined();
        });

        it('should return Menu', () => {
            expect(classUnderTest.get()).toEqual(jasmine.any(Object));
        });

        it('should return passed Menu', () => {
            const menu = new MenuMock();
            classUnderTest = new MenuControllerMock(menu);

            expect(classUnderTest.get()).toBe(menu);
        });
    });

    describe('getMenus', () => {
        it('should be defined', () => {
            expect(classUnderTest.getMenus).toBeDefined();
        });

        it('should return Menus', () => {
            expect(classUnderTest.getMenus()).toEqual([jasmine.any(Object)]);
        });

        it('should contain Menu', () => {
            const menu = new MenuMock();
            classUnderTest = new MenuControllerMock(menu);

            expect(classUnderTest.getMenus()).toContain(menu);
        });
    });

    describe('getOpen', () => {
        it('should be defined', () => {
            expect(classUnderTest.getOpen).toBeDefined();
        });

        it('should return Menu', () => {
            expect(classUnderTest.getOpen()).toEqual(jasmine.any(Object));
        });

        it('should return passed Menu', () => {
            const menu = new MenuMock();
            classUnderTest = new MenuControllerMock(menu);

            expect(classUnderTest.getOpen()).toBe(menu);
        });
    });

    describe('isOpen', () => {
        it('should be defined', () => {
            expect(classUnderTest.isOpen).toBeDefined();
        });

        it('should be false', () => {
            expect(classUnderTest.isOpen()).toBe(false);
        });
    });

    describe('open', () => {
        it('should be defined', () => {
            expect(classUnderTest.open).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.open().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('swipeEnable', () => {
        it('should be defined', () => {
            expect(classUnderTest.swipeEnable).toBeDefined();
        });

        it('should return Menu', () => {
            expect(classUnderTest.swipeEnable()).toEqual(jasmine.any(Object));
        });

        it('should return passed Menu', () => {
            const menu = new MenuMock();
            classUnderTest = new MenuControllerMock(menu);

            expect(classUnderTest.swipeEnable()).toBe(menu);
        });
    });

    describe('toggle', () => {
        it('should be defined', () => {
            expect(classUnderTest.toggle).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.toggle().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
