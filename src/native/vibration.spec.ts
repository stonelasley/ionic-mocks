import { VibrationMock } from './vibration';

describe('VibrationMock', () => {
  let vibration;

  beforeEach(() => {
    vibration = new VibrationMock();
  });

  it('should initialise', () => {
    expect(vibration).toBeDefined();
  });

  describe('vibrate', () => {
    it('should have been called', () => {
      vibration.vibrate();
      expect(vibration.vibrate).toHaveBeenCalled();
    });
  });
});
