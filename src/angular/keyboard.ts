import deprecated from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = [
    'close',
    'didHide',
    'didShow',
    'eventsAvailable',
    'hasFocusedTextInput',
    'isOpen',
    'onClose',
    'willHide',
    'willShow'
];

export class KeyboardMock extends BaseMock {

    constructor() {
        super('Keyboard', METHODS);
        this.spyObj.isOpen.and.returnValue(false);
    }

    @deprecated('new Keyboard()')
    public static instance(): any {
        return new KeyboardMock();
    }
}
