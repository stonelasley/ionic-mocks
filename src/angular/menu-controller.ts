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
        this.spyObj.close.and.returnValue(Promise.resolve());
        this.spyObj.enable.and.returnValue(m);
        this.spyObj.get.and.returnValue(m);
        this.spyObj.getMenus.and.returnValue([m]);
        this.spyObj.getOpen.and.returnValue(m);
        this.spyObj.isEnabled.and.returnValue(true);
        this.spyObj.isOpen.and.returnValue(false);
        this.spyObj.open.and.returnValue(Promise.resolve());
        this.spyObj.swipeEnable.and.returnValue(m);
        this.spyObj.toggle.and.returnValue(Promise.resolve());
    }

    @deprecated('new MenuControllerMock()')
    public static instance(menu?: MenuMock): any {
        return new MenuControllerMock(menu);
    }
}
