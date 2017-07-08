export class ItemSlidingMock {
	public static instance(): any {
		let instance: any = jasmine.createSpyObj('ItemSliding', ['close']);

		return instance;
	}
}