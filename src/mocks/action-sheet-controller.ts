import { ActionSheet, ActionSheetController }   from 'ionic-angular';
import { ActionSheetMock }                      from './action-sheet';

export class ActionSheetControllerMock {
	public static instance(actionSheet?: ActionSheet): ActionSheetController {

		let instance = jasmine.createSpyObj('ActionSheetController', ['create']);
		instance.create.and.returnValue(actionSheet || ActionSheetMock.instance());

		return instance;
	}
}
