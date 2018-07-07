import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = ['present', 'dismiss', 'onDidDismiss'];

export class ModalMock extends BaseMock {
    constructor() {
        super('Modal', METHODS);
        this.setReturn('present', Promise.resolve());
    }

    @deprecated('new ModalMock()')
    public static instance(): any {
        return new ModalMock();
    }
}
