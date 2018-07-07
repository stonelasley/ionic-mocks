import deprecated from 'deprecated-decorator';
import { PopoverMock } from './popover';
import { BaseMock } from '../base.mock';

const METHODS = ['create'];

export class PopoverControllerMock extends BaseMock {
    constructor(popOver?: PopoverMock) {
        super('PopoverController', METHODS);
        this.setReturn('create', popOver || new PopoverMock());
    }

    @deprecated('new PopoverControllerMock()')
    public static instance(popOver?: PopoverMock): any {
        return new PopoverControllerMock(popOver);
    }
}
