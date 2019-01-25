import { Observable, of } from 'rxjs';

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

        instance.onKeyboardShow.and.returnValue(of(null));
        instance.onKeyboardHide.and.returnValue(of(null));

        return instance;
    }
}
