"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SlidesMock = /** @class */ (function () {
    function SlidesMock() {
    }
    SlidesMock.instance = function () {
        var instance = jasmine.createSpyObj('Slides', [
            'controlBy',
            'controlInverse',
            'enableKeyboardControl',
            'getActiveIndex',
            'getPreviousIndex',
            'isBeginning',
            'isEnd',
            'length',
            'lockSwipeToNext',
            'lockSwipeToPrev',
            'lockSwipes',
            'resize',
            'slideNext',
            'slidePrev',
            'slideTo',
            'startAutoplay',
            'stopAutoplay',
            'update'
        ]);
        instance.getActiveIndex.and.returnValue(0);
        instance.getPreviousIndex.and.returnValue(0);
        instance.isBeginning.and.returnValue(true);
        instance.isEnd.and.returnValue(false);
        instance.length.and.returnValue(3);
        return instance;
    };
    return SlidesMock;
}());
exports.SlidesMock = SlidesMock;
//# sourceMappingURL=slides.js.map