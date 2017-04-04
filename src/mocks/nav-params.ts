import { NavParams } from 'ionic-angular';

export class NavParamsMock {
	public static instance(getReturn?: any): NavParams {
		let instance = jasmine.createSpyObj('NavParams', ['get']);
		(<jasmine.Spy>(instance.get)).and.returnValue(getReturn);

		return instance;
	}
}