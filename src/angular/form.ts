export class FormMock {
	public static instance(): any {
		let instance = jasmine.createSpyObj('Form', [
			'register',
			'nextId',
			'deregister',
			'setAsFocused',
			'unsetAsFocused',
			'tabFocus'
		]);

		instance.nextId.and.returnValue(0);

		return instance;
	}
}