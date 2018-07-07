import deprecated from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = ['register', 'nextId', 'deregister', 'setAsFocused', 'unsetAsFocused', 'tabFocus'];

export class FormMock extends BaseMock {
    constructor() {
        super('Form', METHODS);
        this.setReturn('nextId', 0);
    }

    @deprecated('new FormMock()')
    public static instance(): any {
        return new FormMock();
    }
}
