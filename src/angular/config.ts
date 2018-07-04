import deprecated from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = [
            'get',
            'getBoolean',
            'getNumber',
            'set',
            'settings',
            'setModeConfig',
            'getModeConfig',
            'setTransition',
            'getTransition'
];
export class ConfigMock extends BaseMock​​ {

    constructor() {
        super('Config', METHODS);
        this.spyObj.get.and.returnValue('');
        this.spyObj.getBoolean.and.returnValue(true);
        this.spyObj.getNumber.and.returnValue(0);

    }

    @deprecated('new ConfigMock()')
    public static instance(): any {
        return new ConfigMock();
    }
}
