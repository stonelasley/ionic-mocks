export class NavParamsMock {
	public static instance(getReturn?: any): any {
		let instance = jasmine.createSpyObj('NavParams', ['get']);
		(<jasmine.Spy>(instance.get)).and.returnValue(getReturn);

		return instance;
	}
}