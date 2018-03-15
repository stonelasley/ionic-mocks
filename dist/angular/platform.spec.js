"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_1 = require("./platform");
describe('PlatformMock', function () {
    var classUnderTest;
    beforeEach(function () {
        classUnderTest = platform_1.PlatformMock.instance();
    });
    describe('dir', function () {
        it('should return empty string', function () {
            expect(classUnderTest.dir()).toEqual('');
        });
    });
    describe('hasFocus', function () {
        it('should return true', function () {
            expect(classUnderTest.hasFocus()).toBeTruthy();
        });
    });
    describe('registerListener', function () {
        it('should return function', function () {
            expect(classUnderTest.registerListener()).toEqual(jasmine.any(Function));
        });
    });
});
//# sourceMappingURL=platform.spec.js.map