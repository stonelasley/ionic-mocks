"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var nav_controller_1 = require("./nav-controller");
describe('AppMock', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = app_1.AppMock.instance();
    });
    it('should initialize', function () {
        expect(classUnderTest).toBeDefined();
    });
    describe('getActiveNav', function () {
        it('should exist', function () {
            expect(classUnderTest.getActiveNav);
        });
        it('should return a NavController', function () {
            var result = classUnderTest.getActiveNav();
            expect(result).toBeDefined();
        });
        it('should return passed nav', function () {
            var navCtrl = nav_controller_1.NavControllerMock.instance();
            var classUnderTest = app_1.AppMock.instance(navCtrl);
            var result = classUnderTest.getActiveNav();
            expect(result).toBe(navCtrl);
        });
    });
    describe('getActiveNavs', function () {
        it('should exist', function () {
            expect(classUnderTest.getActiveNavs);
        });
        it('should return a NavController array', function () {
            var result = classUnderTest.getActiveNavs();
            expect(result).toBeDefined();
        });
        it('should return passed nav', function () {
            var navCtrl = nav_controller_1.NavControllerMock.instance();
            var classUnderTest = app_1.AppMock.instance(navCtrl);
            var result = classUnderTest.getActiveNav();
            expect(result).toContain(navCtrl);
        });
    });
    describe('getNavByIdOrName', function () {
        it('should exist', function () {
            expect(classUnderTest.getNavByIdOrName);
        });
        it('should return a nav', function () {
            var result = classUnderTest.getNavByIdOrName(1);
            expect(result).toBeDefined();
        });
        it('should return passed nav', function () {
            var navCtrl = nav_controller_1.NavControllerMock.instance();
            var classUnderTest = app_1.AppMock.instance(navCtrl);
            var result = classUnderTest.getNavByIdOrName(1);
            expect(result).toBe(navCtrl);
        });
    });
    describe('getRootNav', function () {
        it('should exist', function () {
            expect(classUnderTest.getRootNav);
        });
        it('should return a nav', function () {
            var result = classUnderTest.getRootNav();
            expect(result).toBeDefined();
        });
        it('should return passed nav', function () {
            var navCtrl = nav_controller_1.NavControllerMock.instance();
            var classUnderTest = app_1.AppMock.instance(navCtrl);
            var result = classUnderTest.getRootNav();
            expect(result).toBe(navCtrl);
        });
    });
    describe('getRootNavs', function () {
        it('should exist', function () {
            expect(classUnderTest.getRootNavs);
        });
        it('should return a NavController array', function () {
            var result = classUnderTest.getRootNavs();
            expect(result).toBeDefined();
        });
        it('should return passed nav', function () {
            var navCtrl = nav_controller_1.NavControllerMock.instance();
            var classUnderTest = app_1.AppMock.instance(navCtrl);
            var result = classUnderTest.getRootNavs();
            expect(result).toContain(navCtrl);
        });
    });
    describe('getRootNavById', function () {
        it('should exist', function () {
            expect(classUnderTest.getRootNavById);
        });
        it('should return a nav', function () {
            var result = classUnderTest.getRootNavById(1);
            expect(result).toBeDefined();
        });
        it('should return passed nav', function () {
            var navCtrl = nav_controller_1.NavControllerMock.instance();
            var classUnderTest = app_1.AppMock.instance(navCtrl);
            var result = classUnderTest.getRootNavById(1);
            expect(result).toBe(navCtrl);
        });
    });
    describe('isScrolling', function () {
        it('should exist', function () {
            expect(classUnderTest.isScrolling);
        });
        it('should return false', function () {
            expect(classUnderTest.isScrolling()).toEqual(false);
        });
    });
    describe('setTitle', function () {
        it('should exist', function () {
            expect(classUnderTest.setTitle);
        });
    });
    describe('viewDidEnter', function () {
        it('should exist', function () {
            expect(classUnderTest.viewDidEnter);
        });
        it('should return empty Observable', function (done) {
            classUnderTest.viewDidEnter()
                .subscribe(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('viewDidLeave', function () {
        it('should exist', function () {
            expect(classUnderTest.viewDidLeave);
        });
        it('should return empty Observable', function (done) {
            classUnderTest.viewDidLeave()
                .subscribe(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('viewWillEnter', function () {
        it('should exist', function () {
            expect(classUnderTest.viewWillEnter);
        });
        it('should return empty Observable', function (done) {
            classUnderTest.viewWillEnter()
                .subscribe(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('viewWillLeave', function () {
        it('should exist', function () {
            expect(classUnderTest.viewWillLeave);
        });
        it('should return empty Observable', function (done) {
            classUnderTest.viewDidLeave()
                .subscribe(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
    describe('viewWillUnLoad', function () {
        it('should exist', function () {
            expect(classUnderTest.viewWillUnload);
        });
        it('should return empty Observable', function (done) {
            classUnderTest.viewWillUnload()
                .subscribe(function (result) {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
//# sourceMappingURL=app.spec.js.map