import { AppMock } from './app';
import { NavControllerMock } from './nav-controller';

describe('AppMock', () => {

    let classUnderTest;

    beforeEach(() => {
        classUnderTest = AppMock.instance();
    });

    it('should initialize', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('getActiveNav', () => {

        it('should exist', () => {
            expect(classUnderTest.getActiveNav);
        });

        it('should return a NavController', () => {
            let result = classUnderTest.getActiveNav();

            expect(result).toBeDefined();
        });

        it('should return passed nav', () => {
            let navCtrl = NavControllerMock.instance();
            let classUnderTest = AppMock.instance(navCtrl);

            let result = classUnderTest.getActiveNav();

            expect(result).toBe(navCtrl);
        });
    });

    describe('getActiveNavs', () => {

        it('should exist', () => {
            expect(classUnderTest.getActiveNavs);
        });

        it('should return a NavController array', () => {
            let result = classUnderTest.getActiveNavs();

            expect(result).toBeDefined();
        });

        it('should return passed nav', () => {
            let navCtrl = NavControllerMock.instance();
            let classUnderTest = AppMock.instance(navCtrl);

            let result = classUnderTest.getActiveNav();

            expect(result).toContain(navCtrl);
        });
    });

    describe('getNavByIdOrName', () => {

        it('should exist', () => {
            expect(classUnderTest.getNavByIdOrName);
        });

        it('should return a nav', () => {
            let result = classUnderTest.getNavByIdOrName(1);

            expect(result).toBeDefined();
        });

        it('should return passed nav', () => {
            let navCtrl = NavControllerMock.instance();
            let classUnderTest = AppMock.instance(navCtrl);

            let result = classUnderTest.getNavByIdOrName(1);

            expect(result).toBe(navCtrl);
        });
    });

    describe('getRootNav', () => {

        it('should exist', () => {
            expect(classUnderTest.getRootNav);
        });

        it('should return a nav', () => {
            let result = classUnderTest.getRootNav();

            expect(result).toBeDefined();
        });

        it('should return passed nav', () => {
            let navCtrl = NavControllerMock.instance();
            let classUnderTest = AppMock.instance(navCtrl);

            let result = classUnderTest.getRootNav();

            expect(result).toBe(navCtrl);
        });
    });

    describe('getRootNavs', () => {

        it('should exist', () => {
            expect(classUnderTest.getRootNavs);
        });

        it('should return a NavController array', () => {
            let result = classUnderTest.getRootNavs();

            expect(result).toBeDefined();
        });

        it('should return passed nav', () => {
            let navCtrl = NavControllerMock.instance();
            let classUnderTest = AppMock.instance(navCtrl);

            let result = classUnderTest.getRootNavs();

            expect(result).toContain(navCtrl);
        });
    });

    describe('getRootNavById', () => {

        it('should exist', () => {
            expect(classUnderTest.getRootNavById);
        });

        it('should return a nav', () => {
            let result = classUnderTest.getRootNavById(1);

            expect(result).toBeDefined();
        });

        it('should return passed nav', () => {
            let navCtrl = NavControllerMock.instance();
            let classUnderTest = AppMock.instance(navCtrl);

            let result = classUnderTest.getRootNavById(1);

            expect(result).toBe(navCtrl);
        });
    });

    describe('isScrolling', () => {

        it('should exist', () => {
            expect(classUnderTest.isScrolling);
        });

        it('should return false', () => {

            expect(classUnderTest.isScrolling()).toEqual(false);
        });
    });

    describe('setTitle', () => {

        it('should exist', () => {
            expect(classUnderTest.setTitle);
        });
    });

    describe('viewDidEnter', () => {

        it('should exist', () => {
            expect(classUnderTest.viewDidEnter);
        });

        it('should return empty Observable', done => {

            classUnderTest.viewDidEnter()
                .subscribe(result => {
                    expect(result).toBeUndefined();
                    done();
                });

        });
    });

    describe('viewDidLeave', () => {

        it('should exist', () => {
            expect(classUnderTest.viewDidLeave);
        });

        it('should return empty Observable', done => {

            classUnderTest.viewDidLeave()
                .subscribe(result => {
                    expect(result).toBeUndefined();
                    done();
                });

        });
    });

    describe('viewWillEnter', () => {

        it('should exist', () => {
            expect(classUnderTest.viewWillEnter);
        });

        it('should return empty Observable', done => {

            classUnderTest.viewWillEnter()
                .subscribe(result => {
                    expect(result).toBeUndefined();
                    done();
                });

        });
    });

    describe('viewWillLeave', () => {

        it('should exist', () => {
            expect(classUnderTest.viewWillLeave);
        });

        it('should return empty Observable', done => {

            classUnderTest.viewDidLeave()
                .subscribe(result => {
                    expect(result).toBeUndefined();
                    done();
                });

        });
    });

    describe('viewWillUnLoad', () => {

        it('should exist', () => {
            expect(classUnderTest.viewWillUnload);
        });

        it('should return empty Observable', done => {

            classUnderTest.viewWillUnload()
                .subscribe(result => {
                    expect(result).toBeUndefined();
                    done();
                });

        });
    });
});
