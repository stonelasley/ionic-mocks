import { Popover, PopoverController }   from 'ionic-angular';
import { PopoverMock }                  from './popover';

export class PopoverControllerMock {
	public static instance(popOver?: Popover): PopoverController {

		let instance = jasmine.createSpyObj('PopoverController', ['create']);
		instance.create.and.returnValue(popOver || PopoverMock.instance() );

		return instance;
	}
}
