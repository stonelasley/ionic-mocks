import { Loading } from 'ionic-angular';

export class LoadingMock {
	public static instance(): Loading {
		let instance = jasmine.createSpyObj('Loading', ['present', 'dismissAll', 'setContent', 'setSpinner']);
		instance.present.and.returnValue(Promise.resolve());

		return instance;
	}
}
