import { SlidesMock } from './slides';

describe('Slides', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new SlidesMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('controlBy', () => {
        it('should be defined', () => {
            expect(classUnderTest.controlBy).toBeDefined();
        });
    });

    describe('controlInverse', () => {
        it('should be defined', () => {
            expect(classUnderTest.controlInverse).toBeDefined();
        });
    });

    describe('enableKeyboardControl', () => {
        it('should be defined', () => {
            expect(classUnderTest.enableKeyboardControl).toBeDefined();
        });
    });

    describe('getActiveIndex', () => {
        it('should be defined', () => {
            expect(classUnderTest.getActiveIndex).toBeDefined();
        });

        it('should return 0', () => {
            expect(classUnderTest.getActiveIndex()).toEqual(0);
        });
    });

    describe('getPreviousIndex', () => {
        it('should be defined', () => {
            expect(classUnderTest.getPreviousIndex).toBeDefined();
        });

        it('should return 0', () => {
            expect(classUnderTest.getPreviousIndex()).toEqual(0);
        });
    });

    describe('isBeginning', () => {
        it('should be defined', () => {
            expect(classUnderTest.isBeginning).toBeDefined();
        });

        it('should return true', () => {
            expect(classUnderTest.isBeginning()).toBe(true);
        });
    });

    describe('isEnd', () => {
        it('should be defined', () => {
            expect(classUnderTest.isEnd).toBeDefined();
        });

        it('should return false', () => {
            expect(classUnderTest.isEnd()).toBe(false);
        });
    });

    describe('length', () => {
        it('should be defined', () => {
            expect(classUnderTest.length).toBeDefined();
        });

        it('should return 1', () => {
            expect(classUnderTest.length()).toBe(1);
        });
    });

    describe('lockSwipeToNext', () => {
        it('should be defined', () => {
            expect(classUnderTest.lockSwipeToNext).toBeDefined();
        });
    });

    describe('lockSwipeToPrev', () => {
        it('should be defined', () => {
            expect(classUnderTest.lockSwipeToPrev).toBeDefined();
        });
    });

    describe('lockSwipes', () => {
        it('should be defined', () => {
            expect(classUnderTest.lockSwipes).toBeDefined();
        });
    });

    describe('resize', () => {
        it('should be defined', () => {
            expect(classUnderTest.resize).toBeDefined();
        });
    });

    describe('slideNext', () => {
        it('should be defined', () => {
            expect(classUnderTest.slideNext).toBeDefined();
        });
    });

    describe('slidePrev', () => {
        it('should be defined', () => {
            expect(classUnderTest.slidePrev).toBeDefined();
        });
    });

    describe('slideTo', () => {
        it('should be defined', () => {
            expect(classUnderTest.slideTo).toBeDefined();
        });
    });

    describe('startAutoplay', () => {
        it('should be defined', () => {
            expect(classUnderTest.startAutoplay).toBeDefined();
        });
    });

    describe('stopAutoplay', () => {
        it('should be defined', () => {
            expect(classUnderTest.stopAutoplay).toBeDefined();
        });
    });

    describe('update', () => {
        it('should be defined', () => {
            expect(classUnderTest.update).toBeDefined();
        });
    });
});
