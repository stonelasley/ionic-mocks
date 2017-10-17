"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = require("./storage");
describe('StorageMock', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = storage_1.StorageMock.instance();
    });
    it('should initialize', function () {
        expect(storage_1.StorageMock.instance).toBeDefined();
    });
    describe('driver', function () {
        it('should return string', function () {
            expect(classUnderTest.driver).toEqual('');
        });
    });
    describe('ready', function () {
        it('should return spyable Promise', function (done) {
            classUnderTest.ready()
                .then(function (res) {
                expect(classUnderTest.ready).toHaveBeenCalled();
                expect(res).toEqual({});
                done();
            });
        });
    });
    describe('set', function () {
        it('should return spyable Promise', function (done) {
            classUnderTest.set('foo')
                .then(function (res) {
                expect(classUnderTest.set).toHaveBeenCalledWith('foo');
                expect(res).toBeUndefined();
                done();
            });
        });
    });
    describe('get', function () {
        it('should return spyable Promise with passed parameter', function (done) {
            classUnderTest = storage_1.StorageMock.instance('foo', 'bar');
            classUnderTest.get('foo')
                .then(function (res) {
                expect(classUnderTest.get).toHaveBeenCalledWith('foo');
                expect(res).toEqual('bar');
                done();
            });
        });
        it('should return spyable Promise with default value if no arguments', function (done) {
            classUnderTest.get()
                .then(function (res) {
                expect(classUnderTest.get).toHaveBeenCalled();
                expect(res).toEqual('value1');
                done();
            });
        });
    });
    describe('remove', function () {
        it('should return spyable Promise', function (done) {
            classUnderTest.remove()
                .then(function (res) {
                expect(classUnderTest.remove).toHaveBeenCalled();
                expect(res).toBeUndefined();
                done();
            });
        });
    });
    describe('clear', function () {
        it('should return spyable Promise', function (done) {
            classUnderTest.clear()
                .then(function (res) {
                expect(classUnderTest.clear).toHaveBeenCalled();
                expect(res).toBeUndefined();
                done();
            });
        });
    });
    describe('length', function () {
        it('should return spyable Promise that resolves to 1', function (done) {
            classUnderTest.length()
                .then(function (res) {
                expect(classUnderTest.length).toHaveBeenCalled();
                expect(res).toEqual(1);
                done();
            });
        });
    });
    describe('keys', function () {
        it('should return spyable Promise that resolves to default key', function (done) {
            classUnderTest.keys()
                .then(function (res) {
                expect(classUnderTest.keys).toHaveBeenCalled();
                expect(res).toEqual(['key1']);
                done();
            });
        });
    });
    describe('foreEach', function () {
        it('should return spyable Promise', function (done) {
            classUnderTest.forEach()
                .then(function (res) {
                expect(classUnderTest.forEach).toHaveBeenCalled();
                expect(res).toBeUndefined();
                done();
            });
        });
    });
});
//# sourceMappingURL=storage.spec.js.map