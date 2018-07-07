import deprecated from 'deprecated-decorator';
import { AlertMock } from './alert';
import { BaseMock } from '../base.mock';

const METHODS = ['create'];

export class AlertControllerMock extends BaseMock {
    constructor(alertMock?: AlertMock) {
        super('AlertController', METHODS);
        this.setReturn('create', alertMock || new AlertMock());
    }

    @deprecated('new AlertControllerMock()')
    public static instance(alertMock?: AlertMock): any {
        return new AlertControllerMock(alertMock);
    }
}
