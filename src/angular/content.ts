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
        this.setProperty('contentBottom', 10);
        this.setProperty('contentHeight', 10);
        this.setProperty('contentTop', 10);
        this.setProperty('directionX', 'left');
        this.setProperty('directionY', 'up');
        this.setProperty('isScrolling', false);
        this.setProperty('scrollHeight', 10);
        this.setProperty('scrollLeft', 10);
        this.setProperty('scrollTop', 10);
        this.setProperty('scrollWidth', 10);
        this.setReturn('getContentDimensions', {});
        this.setReturn('scrollTo', Promise.resolve());
        this.setReturn('scrollToBottom', Promise.resolve());
        this.setReturn('scrollToTop', Promise.resolve());
    }

    @deprecated('new ContentMock()')
    public static instance(): any {
        return new ContentMock();
    }
}
