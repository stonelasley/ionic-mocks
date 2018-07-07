import { GoogleAnalyticsMock } from './google-analytics';

describe('GoogleAnalytics', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new GoogleAnalyticsMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('startTrackerWithId', () => {
        it('should be defined', () => {
            expect(classUnderTest.startTrackerWithId).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.startTrackerWithId().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('setAllowIDFACollection', () => {
        it('should be defined', () => {
            expect(classUnderTest.setAllowIDFACollection).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.setAllowIDFACollection().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('setUserId', () => {
        it('should be defined', () => {
            expect(classUnderTest.setUserId).toBeDefined();
        });

        it('should should return empty Promise', done => {
            classUnderTest.setUserId().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('setAnonymizeIp', () => {
        it('should be defined', () => {
            expect(classUnderTest.setAnonymizeIp).toBeDefined();
        });

        it('should should return empty Promise', done => {
            classUnderTest.setAnonymizeIp().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('setAppVersion', () => {
        it('should be defined', () => {
            expect(classUnderTest.setAppVersion).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.setAppVersion().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('setOptOut', () => {
        it('should be defined', () => {
            expect(classUnderTest.setOptOut).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.setOptOut().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('debugMode', () => {
        it('should be defined', () => {
            expect(classUnderTest.debugMode).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.debugMode().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('trackMetric', () => {
        it('should be defined', () => {
            expect(classUnderTest.trackMetric).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.trackMetric().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('trackView', () => {
        it('should be defined', () => {
            expect(classUnderTest.trackView).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.trackView().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('trackException', () => {
        it('should be defined', () => {
            expect(classUnderTest.trackException).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.trackException().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('trackTiming', () => {
        it('should be defined', () => {
            expect(classUnderTest.trackTiming).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.trackTiming().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('addTransaction', () => {
        it('should be defined', () => {
            expect(classUnderTest.addTransaction).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.addTransaction().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('addTransactionItem', () => {
        it('should be defined', () => {
            expect(classUnderTest.addTransactionItem).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.addTransactionItem().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('enableUncaughtExceptionReporting', () => {
        it('should be defined', () => {
            expect(classUnderTest.enableUncaughtExceptionReporting).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.enableUncaughtExceptionReporting().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
