import { Observable } from 'rxjs/Observable';
import { createSpyObj } from '../utilities/create-spy';

export class KeyboardMock {
    public static instance(): any {
        let instance = createSpyObj('Keyboard', [
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
