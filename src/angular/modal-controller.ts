import { BaseMock } from '../base.mock';
import { ModalMock } from './modal';
import deprecated from 'deprecated-decorator';

const METHODS = ['create'];

export class ModalControllerMock extends BaseMock {
    constructor(modal?: ModalMock) {
        super('ModalController', METHODS);
        this.setReturn('create', modal || new ModalMock());
    }

    @deprecated('new ModalControllerMock()')
    public static instance(modal?: ModalMock): any {
        return new ModalControllerMock(modal);
    }
}
