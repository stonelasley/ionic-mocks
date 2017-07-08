import { TabMock } from './tab';

export class TabsMock {
	public static instance(defaultTab?: TabMock, selectedTab?: TabMock, previousTab?: TabMock): any {
		let instance = jasmine.createSpyObj('Tabs', [
			'select',
			'getSelected',
			'ngOnDestroy',
			'previousTab',
			'viewCtrl'
		]);

		instance.select.and.returnValue(defaultTab || TabMock.instance());
		instance.getSelected.and.returnValue(selectedTab || TabMock.instance());
		instance.previousTab.and.returnValue(previousTab || TabMock.instance());

		return instance;
	}
}
