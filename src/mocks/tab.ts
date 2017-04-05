import { Tab } from 'ionic-angular';

export class TabMock {
	public static instance(): Tab {
		return jasmine.createSpyObj('Tab', ['linker']);
	}
}
