import { deprecated } from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = ['vibrate',
];

export class VibrationMock extends BaseMock {
    constructor() {
        super('Vibration', METHODS);
    }

    @deprecated('new VibrationMock()')
    static instance(): any {
      return new VibrationMock();
    }
}
