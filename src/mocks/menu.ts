export class MenuMock {
	public static instance(): any {
		let instance = jasmine.createSpyObj('Menu', ['blank']);
		instance['content'] = "menu content";
		instance['enabled'] = true;
		instance['id'] = 'menuId';
		instance['persistent'] = true;
		instance['side'] = "left";
		instance['swipeEnabled'] = true;
		instance['type'] = "reveal";


		return instance;
	}
}
