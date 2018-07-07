import { BaseMock } from '../base.mock';
import { deprecated } from 'deprecated-decorator';

const METHODS = ['show', 'hide'];

export class SplashScreenMock extends BaseMock {
    constructor() {
        super('SplashScreen', METHODS);
    }

    @deprecated('new SplasyScreenMock()')
    public static instance(): any {
        return new SplashScreenMock();
    }
}
