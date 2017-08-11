import { Observable } from 'rxjs/Observable';

export class KeyboardMock {
    public static instance(): any {
        let instance = jasmine.createSpyObj('Keyboard', [
            'hideKeyboardAccessoryBar',
            'show',
            'close',
            'disableScroll',
            'onKeyboardShow',
            'onKeyboardHide'
        ]);

        instance.onKeyboardShow.and.returnValue(Observable.empty());
        instance.onKeyboardHide.and.returnValue(Observable.empty());

        return instance;
    }
}
