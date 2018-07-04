import { ContentMock } from '.';

describe('Content', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new ContentMock();
    });

    describe('contentBottom', () => {
        it('should be defined', () => {
            expect(classUnderTest.contentBottom).toBeDefined();
        });

        it('should return 10', () => {
            expect(classUnderTest.contentBottom).toEqual(10);
        });
    });

    describe('contentHeight', () => {
        it('should be defined', () => {
            expect(classUnderTest.contentHeight).toBeDefined();
        });

        it('should return 10', () => {
            expect(classUnderTest.contentHeight).toEqual(10);
        });
    });

    describe('contentTop', () => {
        it('should be defined', () => {
            expect(classUnderTest.contentTop).toBeDefined();
        });

        it('should return 10', () => {
            expect(classUnderTest.contentTop).toEqual(10);
        });
    });

    describe('directionX', () => {
        it('should be defined', () => {
            expect(classUnderTest.directionX).toBeDefined();
        });

        it('should should return "left"', () => {
            expect(classUnderTest.directionX).toEqual('left');
        });
    });

    describe('directionY', () => {
        it('should be defined', () => {
            expect(classUnderTest.directionY).toBeDefined();
        });

        it('should should return "up"', () => {
            expect(classUnderTest.directionY).toEqual('up');
        });
    });

    describe('isScrolling', () => {
        it('should be defined', () => {
            expect(classUnderTest.isScrolling).toBeDefined();
        });

        it('should return false', () => {
            expect(classUnderTest.isScrolling).toBe(false);
        });
    });

    describe('scrollHeight', () => {
        it('should be defined', () => {
            expect(classUnderTest.scrollHeight).toBeDefined();
        });

        it('should return 10', () => {
            expect(classUnderTest.scrollHeight).toEqual(10);
        });
    });

    describe('scrollLeft', () => {
        it('should be defined', () => {
            expect(classUnderTest.scrollLeft).toBeDefined();
        });

        it('should return 10', () => {
            expect(classUnderTest.scrollLeft).toEqual(10);
        });
    });

    describe('scrollTop', () => {
        it('should be defined', () => {
            expect(classUnderTest.scrollTop).toBeDefined();
        });

        it('should return 10', () => {
            expect(classUnderTest.scrollTop).toEqual(10);
        });
    });

    describe('scrollWidth', () => {
        it('should be defined', () => {
            expect(classUnderTest.scrollWidth).toBeDefined();
        });

        it('should return 10', () => {
            expect(classUnderTest.scrollWidth).toEqual(10);
        });
    });

    describe('getContentDimensions', () => {
        it('should be defined', () => {
            expect(classUnderTest.getContentDimensions).toBeDefined();
        });

        it('should return empty Object', () => {
            expect(classUnderTest.getContentDimensions()).toEqual({});
        });
    });

    describe('scrollTo', () => {
        it('should be defined', () => {
            expect(classUnderTest.scrollTo).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.scrollTo().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('scrollToBottom', () => {
        it('should be defined', () => {
            expect(classUnderTest.scrollToBottom).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.scrollToBottom().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('scrollToTop', () => {
        it('should be defined', () => {
            expect(classUnderTest.scrollToTop).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.scrollToTop().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
