export class SplashScreenMock {
	public static instance(): any {
		return jasmine.createSpyObj('SplashScreen', ['show', 'hide']);
	}
}