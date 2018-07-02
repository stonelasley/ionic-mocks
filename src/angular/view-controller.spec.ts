import { ViewControllerMock } from './view-controller';

describe('ViewControllerMock', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new ViewControllerMock();
    });

    it('should initialize', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('willEnter', () => {
        it('should be defined', () => {
            expect(classUnderTest.willEnter).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.willEnter().subscribe(result => {
                expect(result).toEqual({});
                done();
            });
        });
    });

    describe('didEnter', () => {
        it('should be defined', () => {
            expect(classUnderTest.didEnter).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.didEnter().subscribe(result => {
                expect(result).toEqual({});
                done();
            });
        });
    });

    describe('willLeave', () => {
        it('should be defined', () => {
            expect(classUnderTest.willLeave).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.willLeave().subscribe(result => {
                expect(result).toEqual({});
                done();
            });
        });
    });

    describe('didLeave', () => {
        it('should be defined', () => {
            expect(classUnderTest.didLeave).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.didLeave().subscribe(result => {
                expect(result).toEqual({});
                done();
            });
        });
    });

    describe('willUnload', () => {
        it('should be defined', () => {
            expect(classUnderTest.willUnload).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.willUnload().subscribe(result => {
                expect(result).toEqual({});
                done();
            });
        });
    });

    describe('didUnload', () => {
        it('should be defined', () => {
            expect(classUnderTest.didUnload).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.didUnload().subscribe(result => {
                expect(result).toEqual({});
                done();
            });
        });
    });

    describe('subscribe', () => {
        it('should be defined', () => {
            expect(classUnderTest.subscribe).toBeDefined();
        });

        it('should return empty Observable', done => {
            classUnderTest.subscribe().subscribe(result => {
                expect(result).toEqual({});
                done();
            });
        });
    });

    describe('dismiss', () => {
        it('should be defined', () => {
            expect(classUnderTest.dismiss).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.dismiss().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('onDidDismiss', () => {
        it('should be defined', () => {
            expect(classUnderTest.onDidDismiss).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.onDidDismiss().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('onWillDismiss', () => {
        it('should be defined', () => {
            expect(classUnderTest.onWillDismiss).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.onWillDismiss().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('contentRef', () => {
        it('should be defined', () => {
            expect(classUnderTest.contentRef).toBeDefined();
        });

        it('should return empty promise', done => {
            classUnderTest.contentRef().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
