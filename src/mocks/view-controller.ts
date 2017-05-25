import { Observable } from 'rxjs';

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
			'getContent',
			'contentRef',
			'hasNavbar',
			'setBackButtonText',
			'showBackButton'
		]);

		instance.willEnter.and.returnValue(Observable.of({}));
		instance.didEnter.and.returnValue(Observable.of({}));
		instance.willLeave.and.returnValue(Observable.of({}));
		instance.didLeave.and.returnValue(Observable.of({}));
		instance.willUnload.and.returnValue(Observable.of({}));
		instance.didUnload.and.returnValue(Observable.of({}));
		instance.dismiss.and.returnValue(Promise.resolve());
		instance.enableBack.and.returnValue(true);
		instance.isFirst.and.returnValue(false);
		instance.isLast.and.returnValue(false);
		instance.pageRef.and.returnValue({});
		instance.getContent.and.returnValue({});
		instance.hasNavbar.and.returnValue(true);

		instance['component'] = {};
		instance['index'] = 0;

		return instance;
	}
}