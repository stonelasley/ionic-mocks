import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import { BaseMock } from '../base.mock';
import { deprecated } from 'deprecated-decorator';

const METHODS = [
    'isAvailable',
    'watchForTouches',
    'configureQuickActions',
    'onHomeIconPressed',
    'enableLinkPreview',
    'disableLinkPreview'
];

export class ThreeDeeTouchMock extends BaseMock {
    constructor() {
        super('ThreeDeeTouch', METHODS);

        this.spyObj.isAvailable.and.returnValue(Promise.resolve(true));
        this.spyObj.watchForTouches.and.returnValue(Observable.of<Object>({}));
        this.spyObj.onHomeIconPressed.and.returnValue(ArrayObservable.of(undefined));
    }

    @deprecated('new ThreeDeeTouchMock()')
    public static instance(): any {
        return new ThreeDeeTouchMock();
    }
}
