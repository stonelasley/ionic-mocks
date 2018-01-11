import { createSpyObj } from '../utilities/create-spy';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';

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

        instance.onKeyboardShow.and.returnValue(EmptyObservable.create());
        instance.onKeyboardHide.and.returnValue(EmptyObservable.create());

        return instance;
    }
}
