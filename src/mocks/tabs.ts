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

		(<jasmine.Spy>(instance.select)).and.returnValue(defaultTab);
		(<jasmine.Spy>(instance.getSelected)).and.returnValue(selectedTab);
		(<jasmine.Spy>(instance.previousTab)).and.returnValue(previousTab);

		return instance;
	}
}