import { BaseMock } from './../base.mock';
import { deprecated } from 'deprecated-decorator';

const METHODS = [
    'dir',
    'getQueryParam',
    'height',
    'is',
    'isLandscape',
    'isPortrait',
    'isRTL',
    'lang',
    'pause',
    'platforms',
    'ready',
    'registerBackButtonAction',
    'resize',
    'resume',
    'setDir',
    'setLang',
    'testUserAgent',
    'url',
    'versions',
    'width',
    'doc',
    'registerListener',
    'win',
    'getActiveElement',
    'raf',
    'hasFocus',
    'getElementComputedStyle',
    'timeout'
];

export class PlatformMock extends BaseMock {
    constructor() {
        super('Platform', METHODS);

        this.spyObj.dir.and.returnValue('');
        this.spyObj.getQueryParam.and.returnValue('');
        this.spyObj.height.and.returnValue(0);
        this.spyObj.is.and.returnValue(true);
        this.spyObj.isLandscape.and.returnValue(false);
        this.spyObj.isPortrait.and.returnValue(true);
        this.spyObj.isRTL.and.returnValue(false);
        this.spyObj.lang.and.returnValue('en');
        this.spyObj.platforms.and.returnValue([]);
        this.spyObj.ready.and.returnValue(Promise.resolve());
        this.spyObj.registerBackButtonAction.and.returnValue(() => {});
        this.spyObj.registerListener.and.returnValue(() => {});
        this.spyObj.url.and.returnValue('');
        this.spyObj.versions.and.returnValue({});
        this.spyObj.width.and.returnValue(0);
        this.spyObj.doc.and.returnValue(document);
        this.spyObj.win.and.returnValue(window);
        this.spyObj.getActiveElement.and.returnValue(document['activeElement']);
        this.spyObj.raf.and.returnValue(1);
        this.spyObj.hasFocus.and.returnValue(true);
        this.spyObj.getElementComputedStyle.and.returnValue({
            paddingLeft: '10',
            paddingTop: '10',
            paddingRight: '10',
            paddingBottom: '10'
        });
        this.spyObj.timeout.and.returnValue((callback: any, timer: number) => setTimeout(callback, timer));
    }

    @deprecated('new PlatformMock()')
    public static instance(): any {
        return new PlatformMock();
    }
}
