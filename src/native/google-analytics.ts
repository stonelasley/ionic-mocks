import { createSpyObj } from '../utilities/create-spy';

export class GoogleAnalyticsMock {

    public static instance(): any {
        let instance = createSpyObj('GoogleAnalytics', [
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
        ]);
        instance.startTrackerWithId.and.returnValue(Promise.resolve());
        instance.setAllowIDFACollection.and.returnValue(Promise.resolve());
        instance.setUserId.and.returnValue(Promise.resolve());
        instance.setAnonymizeIp.and.returnValue(Promise.resolve());
        instance.setAppVersion.and.returnValue(Promise.resolve());
        instance.setOptOut.and.returnValue(Promise.resolve());
        instance.debugMode.and.returnValue(Promise.resolve());
        instance.trackMetric.and.returnValue(Promise.resolve());
        instance.trackView.and.returnValue(Promise.resolve());
        instance.addCustomDimension.and.returnValue(Promise.resolve());
        instance.trackEvent.and.returnValue(Promise.resolve());
        instance.trackException.and.returnValue(Promise.resolve());
        instance.trackTiming.and.returnValue(Promise.resolve());
        instance.addTransaction.and.returnValue(Promise.resolve());
        instance.addTransactionItem.and.returnValue(Promise.resolve());
        instance.enableUncaughtExceptionReporting.and.returnValue(Promise.resolve());

        return instance;
    }
}
