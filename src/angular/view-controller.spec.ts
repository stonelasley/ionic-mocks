import { ViewControllerMock } from './view-controller';
describe('ViewControllerMock', () => {
    it('should initialize', () => {
        expect(ViewControllerMock.instance).toBeDefined();
        expect(ViewControllerMock.instance()).toBeDefined();
    });

});
