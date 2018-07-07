import deprecated from 'deprecated-decorator';
import { ActionSheetMock } from './action-sheet';
import { BaseMock } from '../base.mock';

const METHODS: string[] = [
    'create'
];

export class ActionSheetControllerMock extends BaseMock {

    constructor(actionSheet?: ActionSheetMock) {
        super('ActionSheet', METHODS);
        this.setReturn('create', actionSheet || new ActionSheetMock());
    }

    @deprecated('new ActionSheetControllerMock()')
    public static instance(actionSheet?: ActionSheetMock): any {
        return new ActionSheetControllerMock(actionSheet);
    }
}
