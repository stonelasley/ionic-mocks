export class AlertMock {
	public static instance(): any {
		let instance = jasmine.createSpyObj('Alert', ['present', 'dismiss']);
		(<jasmine.Spy>(instance.present)).and.returnValue(Promise.resolve());
		(<jasmine.Spy>(instance.dismiss)).and.returnValue(Promise.resolve());

		return instance;
	}
}
