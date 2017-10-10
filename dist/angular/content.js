"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContentMock = /** @class */ (function () {
    function ContentMock() {
    }
    ContentMock.instance = function () {
        var instance = jasmine.createSpyObj('Content', ['addImg', 'getContentDimensions', 'getFixedElement', 'resize', 'scrollTo', 'scrollToBottom', 'scrollToTop']);
        instance['contentBottom'] = 10;
        instance['contentHeight'] = 10;
        instance['contentTop'] = 10;
        instance['directionX'] = 'left';
        instance['directionY'] = 'up';
        instance['isScrolling'] = false;
        instance['scrollHeight'] = 10;
        instance['scrollLeft'] = 10;
        instance['scrollTop'] = 10;
        instance['scrollWidth'] = 10;
        var dimensions = {};
        instance.getContentDimensions.and.returnValue(dimensions);
        instance.scrollTo.and.returnValue(Promise.resolve());
        instance.scrollToBottom.and.returnValue(Promise.resolve());
        instance.scrollToTop.and.returnValue(Promise.resolve());
        return instance;
    };
    return ContentMock;
}());
exports.ContentMock = ContentMock;
//# sourceMappingURL=content.js.map