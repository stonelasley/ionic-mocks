import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS: string[] = ['present', 'dismiss'];

export class ActionSheetMock extends BaseMock {
    constructor(actionSheet?: ActionSheetMock) {
        super('ActionSheet', METHODS);

        this.setReturn('present', Promise.resolve());
        this.setReturn('dismiss', Promise.resolve());
    }

    @deprecated('new ActionSheet()')
    public static instance(): any {
        return new ActionSheetMock();
    }
}
