import deprecated from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = [
    'startTrackerWithId',
    'setAllowIDFACollection',
    'setUserId',
    'setAnonymizeIp',
    'setAppVersion',
    'setOptOut',
    'debugMode',
    'trackMetric',
    'trackView',
    'addCustomDimension',
    'trackEvent',
    'trackException',
    'trackTiming',
    'addTransaction',
    'addTransactionItem',
    'enableUncaughtExceptionReporting'
];

export class GoogleAnalyticsMock extends BaseMock {
    constructor() {
        super('GoogleAnalytics', METHODS);
        this.spyObj.startTrackerWithId.and.returnValue(Promise.resolve());
        this.spyObj.setAllowIDFACollection.and.returnValue(Promise.resolve());
        this.spyObj.setUserId.and.returnValue(Promise.resolve());
        this.spyObj.setAnonymizeIp.and.returnValue(Promise.resolve());
        this.spyObj.setAppVersion.and.returnValue(Promise.resolve());
        this.spyObj.setOptOut.and.returnValue(Promise.resolve());
        this.spyObj.debugMode.and.returnValue(Promise.resolve());
        this.spyObj.trackMetric.and.returnValue(Promise.resolve());
        this.spyObj.trackView.and.returnValue(Promise.resolve());
        this.spyObj.addCustomDimension.and.returnValue(Promise.resolve());
        this.spyObj.trackEvent.and.returnValue(Promise.resolve());
        this.spyObj.trackException.and.returnValue(Promise.resolve());
        this.spyObj.trackTiming.and.returnValue(Promise.resolve());
        this.spyObj.addTransaction.and.returnValue(Promise.resolve());
        this.spyObj.addTransactionItem.and.returnValue(Promise.resolve());
        this.spyObj.enableUncaughtExceptionReporting.and.returnValue(Promise.resolve());
    }

    @deprecated('new GoogleAnalyticsMock()')
    static instance(): any {
        new GoogleAnalyticsMock();
    }
}
