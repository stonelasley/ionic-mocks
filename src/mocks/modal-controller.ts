import { Modal, ModalController }   from 'ionic-angular';
import { ModalMock }                from './modal';

export class ModalControllerMock {
	public static instance(modalMock?: Modal): ModalController {
		let modal = modalMock || ModalMock.instance();

		let instance = jasmine.createSpyObj('ModalController', ['create']);
		instance.create.and.returnValue(modal);

		return instance;
	}
}
