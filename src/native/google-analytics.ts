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
        this.setReturn('startTrackerWithId', Promise.resolve());
        this.setReturn('setAllowIDFACollection', Promise.resolve());
        this.setReturn('setUserId', Promise.resolve());
        this.setReturn('setAnonymizeIp', Promise.resolve());
        this.setReturn('setAppVersion', Promise.resolve());
        this.setReturn('setOptOut', Promise.resolve());
        this.setReturn('debugMode', Promise.resolve());
        this.setReturn('trackMetric', Promise.resolve());
        this.setReturn('trackView', Promise.resolve());
        this.setReturn('addCustomDimension', Promise.resolve());
        this.setReturn('trackEvent', Promise.resolve());
        this.setReturn('trackException', Promise.resolve());
        this.setReturn('trackTiming', Promise.resolve());
        this.setReturn('addTransaction', Promise.resolve());
        this.setReturn('addTransactionItem', Promise.resolve());
        this.setReturn('enableUncaughtExceptionReporting', Promise.resolve());
    }

    @deprecated('new GoogleAnalyticsMock()')
    static instance(): any {
        new GoogleAnalyticsMock();
    }
}
