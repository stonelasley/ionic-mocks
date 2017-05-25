import { Observable } from 'rxjs/Observable';

export class ViewControllerMock {
	public static instance(): any {

		let instance = jasmine.createSpyObj('ViewController', [
			'willEnter',
			'didEnter',
			'willLeave',
			'didLeave',
			'willUnload',
			'didUnload',
			'dismiss',
			'onDidDismiss',
			'onWillDismiss',
			'enableBack',
			'isFirst',
			'isLast',
			'pageRef',
			'contentRef',
			'hasNavbar',
			'setBackButtonText',
			'showBackButton'
		]);

		instance.willEnter.and.return(Observable.from(undefined))
		instance.didEnter.and.return(Observable.from(undefined))
		instance.willLeave.and.return(Observable.from(undefined))
		instance.didLeave.and.return(Observable.from(undefined))
		instance.willUnload.and.return(Observable.from(undefined))
		instance.didUnload.and.return(Observable.from(undefined))
		instance.dismiss.and.return(Promise.resolve());
		instance.enableBack.and.return(true);
		instance.isFirst.and.return(false);
		instance.isLast.and.return(false);
		instance.pageRef.and.return({});
		instance.getContent.and.return({});
		instance.hasNavbar.and.return(true);

		instance['component'] = {};
		instance['index'] = 0;

		return instance;
	}
}