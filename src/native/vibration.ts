export class VibrationMock {
  public static instance(): any {
    let instance = jasmine.createSpyObj('Vibration', ['vibrate']);
    instance.vibrate.and.stub();
    return instance;
  }
}
