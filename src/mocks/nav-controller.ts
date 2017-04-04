import { NavController } from 'ionic-angular';

export class NavControllerMock {
	public static instance(): NavController {

		let instance = jasmine.createSpyObj('navController', [
			'push',
			'pop',
			'ionViewDidLoad',
			'ionViewWillEnter',
			'ionViewDidEnter',
			'ionViewWillLeave',
			'ionViewWillUnload',
			'ionViewCanEnter',
			'ionViewCanLeave'
		]);

		(<jasmine.Spy>(instance.push)).and.returnValue(Promise.resolve());
		(<jasmine.Spy>(instance.pop)).and.returnValue(Promise.resolve());
		(<jasmine.Spy>(instance.ionViewCanEnter)).and.returnValue(true);
		(<jasmine.Spy>(instance.ionViewCanLeave)).and.returnValue(true);

		return instance;
	}
}