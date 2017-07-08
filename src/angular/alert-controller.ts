import { AlertMock }                from './alert';

export class AlertControllerMock {
	public static instance(alertMock?: AlertMock): any {

		let instance = jasmine.createSpyObj('AlertController', ['create']);
		instance.create.and.returnValue(alertMock || AlertMock.instance());

		return instance;
	}
}
