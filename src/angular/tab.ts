import { deprecated } from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = ['linker'];
export class TabMock extends BaseMock {

    constructor() {
        super('Tab', METHODS);
    }

    @deprecated('new TabMock()')
    public static instance(): any {
        return new TabMock();
    }
}
