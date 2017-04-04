import { Haptic } from 'ionic-angular';

export class HapticMock {
	public static instance(): Haptic {
		let instance = jasmine.createSpyObj('Haptic', ['available',
			'gestureSelectionChanged',
			'gestureSelectionEnd',
			'gestureSelectionStart',
			'impact',
			'notification',
			'selection'
		]);
		(<jasmine.Spy>(instance.available)).and.returnValue(true);

		return instance;
	}
}