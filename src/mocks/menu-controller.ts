import { MenuController, Menu } from 'ionic-angular';

export class MenuControllerMock {
	public static instance(): MenuController {
		let menu = {};
		let instance = jasmine.createSpyObj('MenuController', ['close', 'enable', 'get', 'getMenus', 'getOpen', 'isEnabled', 'isOpen', 'open', 'swipeEnabled', 'toggle']);
		instance.close.and.returnValue(Promise.resolve());
		instance.enable.and.returnValue(menu);
		instance.get.and.returnValue(menu);
		instance.getMenus.and.returnValue([menu]);
		instance.getOpen.and.returnValue(menu);
		instance.isEnabled.and.returnValue(true);
		instance.isOpen.and.returnValue(false);
		instance.open.and.returnValue(Promise.resolve());
		instance.swipeEnabled.and.returnValue(menu);
		instance.toggle.and.returnValue(Promise.resolve());

		return instance;
	}
}
