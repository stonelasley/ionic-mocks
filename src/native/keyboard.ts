import {EmptyObservable} from 'rxjs/observable/EmptyObservable';

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

        instance.onKeyboardShow.and.returnValue(EmptyObservable.create());
        instance.onKeyboardHide.and.returnValue(EmptyObservable.create());

        return instance;
    }
}
