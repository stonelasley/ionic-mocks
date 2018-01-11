import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

export class ThreeDeeTouchMock{
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
        instance.watchForTouches.and.returnValue(ArrayObservable.of({}));
        instance.onHomeIconPressed.and.returnValue(EmptyObservable.create());

        return instance;
    }
}