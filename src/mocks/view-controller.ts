import { ViewController }   from 'ionic-angular';
import { Observable } from 'rxjs';

export class ViewControllerMock {
	public static instance(): ViewController {

		let instance = jasmine.createSpyObj('ViewController', [
			'contentRef',
			'dismiss',
			'enableBack',
			'getContent',
			'hasNavbar',
			'isFirst',
			'isLast',
			'onDidDismiss',
			'onWillDismiss',
			'pageRef',
			'setBackButtonText',
			'showBackButton',
		]);

		instance['didEnter'] = Observable.of({});
		instance['didLeave'] = Observable.of({});
		instance['willEnter'] = Observable.of({});
		instance['willLeave'] = Observable.of({});
		instance['willUnload'] = Observable.of({});
		instance['index'] = 0;

		instance.contentRef.and.returnValue({});
		instance.dismiss.and.returnValue(undefined);
		instance.enableBack.and.returnValue(true);
		instance.getContent.and.returnValue({});
		instance.hasNavbar.and.returnValue(true);
		instance.isFirst.and.returnValue(true);
		instance.isLast.and.returnValue(false);
		instance.pageRef.and.returnValue({});

		return instance;
	}
}
