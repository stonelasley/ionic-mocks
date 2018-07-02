import { Observable } from 'rxjs/Observable';

export class ThreeDeeTouchMock {
    public static instance(): any {
        let instance = jasmine.createSpyObj('ThreeDeeTouch', [
            'isAvailable',
            'watchForTouches',
            'configureQuickActions',
            'onHomeIconPressed',
            'enableLinkPreview',
            'disableLinkPreview'
        ]);
        instance.isAvailable.and.returnValue(Promise.resolve(true));
        instance.watchForTouches.and.returnValue(Observable.of({}));
        instance.onHomeIconPressed.and.returnValue(Observable.empty());

        return instance;
    }
}
