import { ActionSheet } from "ionic-angular";

export class ActionSheetMock {
	public static instance(): ActionSheet {
		let instance = jasmine.createSpyObj('ActionSheet', ['present', 'dismiss']);
		instance.present.and.returnValue(Promise.resolve());
		instance.dismiss.and.returnValue(Promise.resolve());

		return instance;
	}
}
