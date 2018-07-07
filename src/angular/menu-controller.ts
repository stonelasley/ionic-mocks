import deprecated from 'deprecated-decorator';
import { MenuMock } from './menu';
import { BaseMock } from '../base.mock';

const METHODS = [
    'close',
    'enable',
    'get',
    'getMenus',
    'getOpen',
    'isEnabled',
    'isOpen',
    'open',
    'swipeEnable',
    'toggle'
];

export class MenuControllerMock extends BaseMock {
    constructor(menu?: MenuMock) {
        super('MenuController', METHODS);
        let m = menu || new MenuMock();
        this.setReturn('close', Promise.resolve());
        this.setReturn('enable', m);
        this.setReturn('get', m);
        this.setReturn('getMenus', [m]);
        this.setReturn('getOpen', m);
        this.setReturn('isEnabled', true);
        this.setReturn('isOpen', false);
        this.setReturn('open', Promise.resolve());
        this.setReturn('swipeEnable', m);
        this.setReturn('toggle', Promise.resolve());
    }

    @deprecated('new MenuControllerMock()')
    public static instance(menu?: MenuMock): any {
        return new MenuControllerMock(menu);
    }
}
