import { Loading, LoadingController }   from 'ionic-angular';
import { LoadingMock }                  from './loading';

export class LoadingControllerMock {
	public static instance(loading?: Loading): LoadingController {

		let instance = jasmine.createSpyObj('LoadingController', ['create']);
		(<jasmine.Spy>(instance.create)).and.returnValue(loading || LoadingMock.instance() );

		return instance;
	}
}