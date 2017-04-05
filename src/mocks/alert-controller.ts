import { Alert, AlertController }   from 'ionic-angular';
import { AlertMock }                from './alert';

export class AlertControllerMock {
	public static instance(alertMock?: Alert): AlertController {

		let instance = jasmine.createSpyObj('AlertController', ['create']);
		instance.create.and.returnValue(alertMock || AlertMock.instance());

		return instance;
	}
}
