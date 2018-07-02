import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';


const METHODS: string[] = [
    'present',
    'dismiss'
];

export class ActionSheetMock extends BaseMock {

    constructor(actionSheet?: ActionSheetMock) {
        super('ActionSheet', METHODS);

        this.spyObj.present.and.returnValue(Promise.resolve());
        this.spyObj.dismiss.and.returnValue(Promise.resolve());
    }

        @deprecated('new ActionSheet()')
        public static instance(): any {
            return new ActionSheetMock();
        }
}
