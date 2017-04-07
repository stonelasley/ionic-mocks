import { Toast } from 'ionic-angular';

export class ToastMock {
	public static instance(): Toast {
		let instance = jasmine.createSpyObj('Toast', ['present', 'dismissAll', 'setContent', 'setSpinner']);
		instance.present.and.returnValue(Promise.resolve());

		return instance;
	}
}
