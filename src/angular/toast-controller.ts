import deprecated from 'deprecated-decorator';
import { BaseMock } from '../base.mock';
import { ToastMock } from './toast';

const METHODS = ['create'];

export class ToastControllerMock extends BaseMock {
    constructor(toast?: ToastMock) {
        super('ToastController', METHODS);
        this.setReturn('create', toast || new ToastMock());
    }

    @deprecated('new ToastControllerMock()')
    public static instance(toast?: ToastMock): any {
        return new ToastControllerMock(toast);
    }
}
