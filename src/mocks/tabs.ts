import { TabMock } from './tab';
import { Tabs } from 'ionic-angular';

export class TabsMock {
	public static instance(): Tabs {
		let defaultTab = TabMock.instance();
		let selectedTab = TabMock.instance();
		let previousTab = TabMock.instance();

		let instance = jasmine.createSpyObj('Tabs', [
			'select',
			'getSelected',
			'ngOnDestroy',
			'previousTab',
			'viewCtrl'
		]);

		instance.select.and.returnValue(defaultTab);
		instance.getSelected.and.returnValue(selectedTab);
		instance.previousTab.and.returnValue(previousTab);

		return instance;
	}
}
