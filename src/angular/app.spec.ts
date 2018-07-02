import { AppMock } from './app';
import { NavControllerMock } from './nav-controller';

describe('AppMock', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new AppMock();
    });

    it('should initialize', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('getActiveNav', () => {
        it('should exist', () => {
            expect(classUnderTest.getActiveNav).toBeDefined();
        });

        it('should return a NavController', () => {
            let result = classUnderTest.getActiveNav();

            expect(result).toBeDefined();
        });

        it('should return passed nav', () => {
            let navCtrl = new NavControllerMock();
            classUnderTest = new AppMock(navCtrl);

            let result = classUnderTest.getActiveNav();

            expect(result).toBe(navCtrl);
        });
    });

    describe('getActiveNavs', () => {
        it('should exist', () => {
            expect(classUnderTest.getActiveNavs).toBeDefined();
        });

        it('should return a NavController array', () => {
            let result = classUnderTest.getActiveNavs();

            expect(result).toBeDefined();
        });

        it('should return passed nav', () => {
            let navCtrl = new NavControllerMock();
            classUnderTest = new AppMock(navCtrl);

            let result = classUnderTest.getActiveNav();

            expect(result).toContain(navCtrl);
        });
    });

    describe('getNavByIdOrName', () => {
        it('should exist', () => {
            expect(classUnderTest.getNavByIdOrName).toBeDefined();
        });

        it('should return a nav', () => {
            let result = classUnderTest.getNavByIdOrName(1);

            expect(result).toBeDefined();
        });

        it('should return passed nav', () => {
            let navCtrl = new NavControllerMock();
            classUnderTest = new AppMock(navCtrl);

            let result = classUnderTest.getNavByIdOrName(1);

            expect(result).toBe(navCtrl);
        });
    });

    describe('getRootNav', () => {
        it('should exist', () => {
            expect(classUnderTest.getRootNav).toBeDefined();
        });

        it('should return a nav', () => {
            let result = classUnderTest.getRootNav();

            expect(result).toBeDefined();
        });

        it('should return passed nav', () => {
            let navCtrl = new NavControllerMock();
            classUnderTest = new AppMock(navCtrl);

            let result = classUnderTest.getRootNav();

            expect(result).toBe(navCtrl);
        });
    });

    describe('getRootNavs', () => {
        it('should exist', () => {
            expect(classUnderTest.getRootNavs).toBeDefined();
        });

        it('should return a NavController array', () => {
            let result = classUnderTest.getRootNavs();

            expect(result).toBeDefined();
        });

        it('should return passed nav', () => {
            let navCtrl = new NavControllerMock();
            classUnderTest = new AppMock(navCtrl);

            let result = classUnderTest.getRootNavs();

            expect(result).toContain(navCtrl);
        });
    });

    describe('getRootNavById', () => {
        it('should exist', () => {
            expect(classUnderTest.getRootNavById).toBeDefined();
        });

        it('should return a nav', () => {
            let result = classUnderTest.getRootNavById(1);

            expect(result).toBeDefined();
        });

        it('should return passed nav', () => {
            let navCtrl = new NavControllerMock();
            classUnderTest = new AppMock(navCtrl);

            let result = classUnderTest.getRootNavById(1);

            expect(result).toBe(navCtrl);
        });
    });

    describe('isScrolling', () => {
        it('should exist', () => {
            expect(classUnderTest.isScrolling).toBeDefined();
        });

        it('should return false', () => {
            expect(classUnderTest.isScrolling()).toEqual(false);
        });
    });

    describe('setTitle', () => {
        it('should exist', () => {
            expect(classUnderTest.setTitle).toBeDefined();
        });
    });

    describe('viewDidEnter', () => {
        it('should exist', () => {
            expect(classUnderTest.viewDidEnter).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.viewDidEnter().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('viewDidLeave', () => {
        it('should exist', () => {
            expect(classUnderTest.viewDidLeave).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.viewDidLeave().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('viewWillEnter', () => {
        it('should exist', () => {
            expect(classUnderTest.viewWillEnter).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.viewWillEnter().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('viewWillLeave', () => {
        it('should exist', () => {
            expect(classUnderTest.viewWillLeave).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.viewDidLeave().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('viewWillUnLoad', () => {
        it('should exist', () => {
            expect(classUnderTest.viewWillUnload).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.viewWillUnload().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
