import deprecated from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = [
'present', 'dismissAll', 'setContent', 'setSpinner'
];
export class ToastMock extends BaseMock {

    constructor() {
        super('Toast', METHODS);
        this.spyObj.present.and.returnValue(Promise.resolve());
    }

    @deprecated('new ToastMock()')
    public static instance(): any {
        return new ToastMock();
    }
}
