import { Modal } from 'ionic-angular';

export class ModalMock {
	public static instance(): Modal {
		let instance = jasmine.createSpyObj('Modal', ['present', 'dismiss', 'onDidDismiss']);
		(<jasmine.Spy>(instance.present)).and.returnValue(Promise.resolve());
		(<jasmine.Spy>(instance.dismiss)).and.returnValue(Promise.resolve());

		return instance;
	}
}