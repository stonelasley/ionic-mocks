import { BaseMock } from '../base.mock';
import { deprecated } from 'deprecated-decorator';

const METHODS = [
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
];

export class SlidesMock extends BaseMock {
    constructor() {
        super('Slides', METHODS);
        this.spyObj.getActiveIndex.and.returnValue(0);
        this.spyObj.getPreviousIndex.and.returnValue(0);
        this.spyObj.isBeginning.and.returnValue(true);
        this.spyObj.isEnd.and.returnValue(false);
        this.spyObj.length.and.returnValue(1);
    }

    @deprecated('new SlidesMock()')
    public static instance(): any {
        return new SlidesMock();
    }
}
