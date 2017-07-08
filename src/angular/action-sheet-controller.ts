import { ActionSheetMock } from './action-sheet';

export class ActionSheetControllerMock {
	public static instance(actionSheet?: ActionSheetMock): any {

		let instance = jasmine.createSpyObj('ActionSheetController', ['create']);
		instance.create.and.returnValue(actionSheet || ActionSheetMock.instance());

		return instance;
	}
}
