import { createSpyObj } from '../utilities/create-spy';

export class SplashScreenMock {
    public static instance(): any {
        return createSpyObj('SplashScreen', ['show', 'hide']);
    }
}
