import { createSpyObj } from '../utilities/create-spy';
import { MenuMock } from './menu';

export class MenuControllerMock {
    public static instance(menu?: MenuMock): any {
        let m = menu || MenuMock.instance();
        let instance = createSpyObj('MenuController', ['close', 'enable', 'get', 'getMenus', 'getOpen', 'isEnabled', 'isOpen', 'open', 'swipeEnabled', 'toggle']);
        instance.close.and.returnValue(Promise.resolve());
        instance.enable.and.returnValue(m);
        instance.get.and.returnValue(m);
        instance.getMenus.and.returnValue([m]);
        instance.getOpen.and.returnValue(m);
        instance.isEnabled.and.returnValue(true);
        instance.isOpen.and.returnValue(false);
        instance.open.and.returnValue(Promise.resolve());
        instance.swipeEnable.and.returnValue(m);
        instance.toggle.and.returnValue(Promise.resolve());

        return instance;
    }
}
