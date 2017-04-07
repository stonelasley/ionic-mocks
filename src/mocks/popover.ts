import { Popover } from 'ionic-angular';

export class PopoverMock {
	public static instance(): Popover {
		let instance = jasmine.createSpyObj('Popover', ['present', 'dismissAll', 'setContent', 'setSpinner']);
		instance.present.and.returnValue(Promise.resolve());

		return instance;
	}
}
