import { PopoverMock }                  from './popover';

export class PopoverControllerMock {
	public static instance(popOver?: PopoverMock): any {

		let instance = jasmine.createSpyObj('PopoverController', ['create']);
		instance.create.and.returnValue(popOver || PopoverMock.instance() );

		return instance;
	}
}
