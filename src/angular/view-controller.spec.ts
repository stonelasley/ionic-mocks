import { ViewControllerMock } from './view-controller';
describe('ViewControllerMock', () => {
	it('should initialize', () => {
		let instance = ViewControllerMock.instance();
		expect(instance).toBeDefined();
	});

});