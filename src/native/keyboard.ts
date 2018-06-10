import {EMPTY} from 'rxjs';

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

        instance.onKeyboardShow.and.returnValue(EMPTY);
        instance.onKeyboardHide.and.returnValue(EMPTY);

        return instance;
    }
}
