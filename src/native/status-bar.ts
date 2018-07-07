import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = [
    'overlaysWebView',
    'styleDefault',
    'styleLightContent',
    'styleBlackTranslucent',
    'styleBlackOpaque',
    'backgroundColorByName',
    'backgroundColorByHexString',
    'hide',
    'show'
];

export class StatusBarMock extends BaseMock {
    constructor() {
        super('StatusBar', METHODS);
        this.setProperty('isVisible', true);
    }

    @deprecated()
    public static instance(): any {
        return new StatusBarMock();
    }
}
