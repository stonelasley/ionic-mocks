import { deprecated } from 'deprecated-decorator';
import { BaseMock } from '../base.mock';
import { LoadingMock } from './loading';

const METHODS = ['create'];

export class LoadingControllerMock extends BaseMock {
    constructor(loading?: LoadingMock) {
        super('LoadingController', METHODS);
        this.setReturn('create', loading || new LoadingMock());
    }

    @deprecated('new LoadingControllerMock()')
    public static instance(loading?: LoadingMock): any {
        return new LoadingControllerMock(loading);
    }
}
