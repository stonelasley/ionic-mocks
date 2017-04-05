import { Modal } from 'ionic-angular';

export class ModalMock {
	public static instance(): Modal {
		let instance = jasmine.createSpyObj('Modal', ['present', 'dismiss', 'onDidDismiss']);
		instance.present.and.returnValue(Promise.resolve());
		instance.dismiss.and.returnValue(Promise.resolve());

		return instance;
	}
}
