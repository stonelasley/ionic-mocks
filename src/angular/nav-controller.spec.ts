import { NavControllerMock } from './nav-controller';

describe('NavControllerMock', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new NavControllerMock();
    });

    it('should initialize', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('goToRoot', () => {
        it('should be defined', () => {
            expect(classUnderTest.goToRoot).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.goToRoot().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('initPane', () => {
        it('should be defined', () => {
            expect(classUnderTest.initPane).toBeDefined();
        });

        it('should return 1', () => {
            expect(classUnderTest.initPane()).toEqual(1);
        });
    });

    describe('push', () => {
        it('should be defined', () => {
            expect(classUnderTest.push).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.push().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('insert', () => {
        it('should be defined', () => {
            expect(classUnderTest.insert).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.insert().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('insertPage', () => {
        it('should be defined', () => {
            expect(classUnderTest.insertPage).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.insertPage().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('pop', () => {
        it('should be defined', () => {
            expect(classUnderTest.pop).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.pop().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('popTo', () => {
        it('should be defined', () => {
            expect(classUnderTest.popTo).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.popTo().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('popToRoot', () => {
        it('should be defined', () => {
            expect(classUnderTest.popToRoot).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.popToRoot().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('popAll', () => {
        it('should be defined', () => {
            expect(classUnderTest.popAll).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.popAll().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('remove', () => {
        it('should be defined', () => {
            expect(classUnderTest.remove).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.remove().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('removeView', () => {
        it('should be defined', () => {
            expect(classUnderTest.removeView).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.removeView().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('setRoot', () => {
        it('should be defined', () => {
            expect(classUnderTest.setRoot).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.setRoot().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('setPages', () => {
        it('should be defined', () => {
            expect(classUnderTest.setPages).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.setPages().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('hasChildren', () => {
        it('should be defined', () => {
            expect(classUnderTest.hasChildren).toBeDefined();
        });

        it('should return true', () => {
            expect(classUnderTest.hasChildren()).toBe(true);
        });
    });

    describe('canSwipeBack', () => {
        it('should be defined', () => {
            expect(classUnderTest.canSwipeBack).toBeDefined();
        });

        it('should return true', () => {
            expect(classUnderTest.canSwipeBack()).toBe(true);
        });
    });

    describe('canGoBack', () => {
        it('should be defined', () => {
            expect(classUnderTest.canGoBack).toBeDefined();
        });

        it('should return true', () => {
            expect(classUnderTest.canGoBack()).toBe(true);
        });
    });

    describe('isTransitioning', () => {
        it('should be defined', () => {
            expect(classUnderTest.isTransitioning).toBeDefined();
        });

        it('should return false', () => {
            expect(classUnderTest.isTransitioning()).toBe(false);
        });
    });

    describe('isActive', () => {
        it('should be defined', () => {
            expect(classUnderTest.isActive).toBeDefined();
        });

        it('should return true', () => {
            expect(classUnderTest.isActive()).toBe(true);
        });
    });

    describe('indexOf', () => {
        it('should be defined', () => {
            expect(classUnderTest.indexOf).toBeDefined();
        });

        it('should return 0', () => {
            expect(classUnderTest.indexOf()).toEqual(0);
        });
    });

    describe('getViews', () => {
        it('should be defined', () => {
            expect(classUnderTest.getViews).toBeDefined();
        });

        it('should return empty Array', () => {
            expect(classUnderTest.getViews()).toEqual([]);
        });
    });

    describe('isSwipeBackEnabled', () => {
        it('should be defined', () => {
            expect(classUnderTest.isSwipeBackEnabled).toBeDefined();
        });

        it('should return true', () => {
            expect(classUnderTest.isSwipeBackEnabled()).toBe(true);
        });
    });

});
