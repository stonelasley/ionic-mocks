import deprecated from 'deprecated-decorator';
import { BaseMock } from '../base.mock';

const METHODS = [
    'addImg',
    'getContentDimensions',
    'getFixedElement',
    'resize',
    'scrollTo',
    'scrollToBottom',
    'scrollToTop'
];

export class ContentMock extends BaseMock {
    constructor() {
        super('Content', METHODS);
        this['contentBottom'] = 10;
        this['contentHeight'] = 10;
        this['contentTop'] = 10;
        this['directionX'] = 'left';
        this['directionY'] = 'up';
        this['isScrolling'] = false;
        this['scrollHeight'] = 10;
        this['scrollLeft'] = 10;
        this['scrollTop'] = 10;
        this['scrollWidth'] = 10;
        this.spyObj.getContentDimensions.and.returnValue({});
        this.spyObj.scrollTo.and.returnValue(Promise.resolve());
        this.spyObj.scrollToBottom.and.returnValue(Promise.resolve());
        this.spyObj.scrollToTop.and.returnValue(Promise.resolve());
    }

    @deprecated('new ContentMock()')
    public static instance(): any {
        return new ContentMock();
    }
}
