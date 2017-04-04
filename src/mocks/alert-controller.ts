import { Alert, AlertController }   from 'ionic-angular';
import { AlertMock }                from './alert';

export class AlertControllerMock {
	public static instance(alertMock?: Alert): AlertController {
		let alert = alertMock || AlertMock.instance();

		let instance = jasmine.createSpyObj('AlertController', ['create']);
		(<jasmine.Spy>(instance.create)).and.returnValue(alert);

		return instance;
	}
}
