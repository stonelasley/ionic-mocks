import { BaseMock } from './../base.mock';
import { deprecated } from 'deprecated-decorator';
import { ArrayObservable } from 'rxjs/observable/ArrayObservable';

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

        this.setReturn('dir', '');
        this.setReturn('getQueryParam', '');
        this.setReturn('height', 0);
        this.setReturn('is', true);
        this.setReturn('isLandscape', false);
        this.setReturn('isPortrait', true);
        this.setReturn('isRTL', false);
        this.setReturn('lang', 'en');
        this.setReturn('platforms', []);
        this.setReturn('ready', Promise.resolve());
        this.setReturn('registerBackButtonAction', () => {});
        this.setReturn('registerListener', () => {});
        this.setReturn('url', '');
        this.setReturn('versions', {});
        this.setReturn('width', 0);
        this.setReturn('doc', document);
        this.setReturn('win', window);
        this.setReturn('getActiveElement', document['activeElement']);
        this.setReturn('raf', 1);
        this.setReturn('hasFocus', true);
        this.setReturn('getElementComputedStyle', {
            paddingLeft: '10',
            paddingTop: '10',
            paddingRight: '10',
            paddingBottom: '10'
        });
        this.setReturn('timeout', (callback: any, timer: number) => setTimeout(callback, timer));
        this.setReturn('resume', ArrayObservable.of(undefined));
    }

    @deprecated('new PlatformMock()')
    public static instance(): any {
        return new PlatformMock();
    }
}
