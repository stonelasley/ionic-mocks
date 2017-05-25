export class ModalMock {
	public static instance(): any{
		let instance = jasmine.createSpyObj('Modal', ['present', 'dismiss', 'onDidDismiss']);
		instance.present.and.returnValue(Promise.resolve());
		instance.dismiss.and.returnValue(Promise.resolve());

		return instance;
	}
}
