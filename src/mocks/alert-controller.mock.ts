import { AlertMock } from './alert.mock';
export class AlertControllerMock {
	public static instance(): any {

		let instance = jasmine.createSpyObj('AlertController', ['create']);
		(<jasmine.Spy>(instance.create)).and.returnValue(AlertMock.instance());
	}
}
