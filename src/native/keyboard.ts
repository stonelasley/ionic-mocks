import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = ['hideKeyboardAccessoryBar', 'show', 'close', 'disableScroll', 'onKeyboardShow', 'onKeyboardHide'];

export class KeyboardMock extends BaseMock {
    constructor(){
        super('Keyboard', METHODS);
        this.setReturn('onKeyboardShow', ArrayObservable.of(undefined));
        this.setReturn('onKeyboardHide', ArrayObservable.of(undefined));
    }

    @deprecated('new KeybaordMock()')
    public static instance(): any {
        return new KeyboardMock();
    }
}
