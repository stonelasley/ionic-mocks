import { Toast, ToastController }   from 'ionic-angular';
import { ToastMock }                from './toast';

export class ToastControllerMock {
	public static instance(toast?: Toast): ToastController {

		let instance = jasmine.createSpyObj('ToastController', ['create']);
		instance.create.and.returnValue(toast || ToastMock.instance() );

		return instance;
	}
}
