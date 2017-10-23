import { NavControllerMock } from './nav-controller';
describe('NavControllerMock', () => {
	it('should initialize', () => {
		let instance = NavControllerMock.instance();
		expect(instance).toBeDefined();
	});

});