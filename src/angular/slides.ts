import { createSpyObj } from '../utilities/create-spy';

export class SlidesMock {
    public static instance(): any {

        let instance = createSpyObj('Slides', [
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
    }
}
