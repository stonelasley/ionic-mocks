import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = ['present', 'dismiss', 'setContent', 'setSpinner'];
export class LoadingMock extends BaseMock {
    constructor() {
        super('Loading', METHODS);
        this.setReturn('present', Promise.resolve());
    }

    @deprecated('new LoadingMock()')
    public static instance(): any {
        return new LoadingMock();
    }
}
