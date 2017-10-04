import { NavControllerMock } from './nav-controller';
describe('NavControllerMock', () => {
    it('should initialize', () => {
        expect(NavControllerMock.instance).toBeDefined();
        expect(NavControllerMock.instance()).toBeDefined();
    });

});
