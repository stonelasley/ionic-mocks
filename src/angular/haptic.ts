import { BaseMock } from '../base.mock';
import { deprecated } from 'deprecated-decorator';

const METHODS = [
    'available',
    'gestureSelectionChanged',
    'gestureSelectionEnd',
    'gestureSelectionStart',
    'impact',
    'notification',
    'selection'
];

export class HapticMock extends BaseMock {
    constructor() {
        super('Haptic', METHODS);
        this.setReturn('available', true);
    }

    @deprecated('new HapticMock()')
    public static instance(): any {
        return new HapticMock();
    }
}
