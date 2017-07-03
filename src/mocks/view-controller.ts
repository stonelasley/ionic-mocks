import { Observable }           from 'rxjs';
import { NavParamsMock }        from './nav-params';
import { NavControllerMock }    from './nav-controller';

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
			'index',
			'subscribe',
			'getNav',
			'getIONContent',
			'writeReady',
			'readReady',
			'setBackButtonText',
			'showBackButton',
			'_setHeader',
			'_setNavbar',
			'_setNav',
			'_setInstance',
			'_setIONContent',
			'_setContent',
			'_setContentRef',
			'_setFooter',
			'_setIONContentRef'
		]);

		instance.willEnter.and.returnValue(Observable.of({}));
		instance.didEnter.and.returnValue(Observable.of({}));
		instance.willLeave.and.returnValue(Observable.of({}));
		instance.didLeave.and.returnValue(Observable.of({}));
		instance.willUnload.and.returnValue(Observable.of({}));
		instance.didUnload.and.returnValue(Observable.of({}));
		instance.dismiss.and.returnValue(Promise.resolve());
		instance.onDidDismiss.and.returnValue(Promise.resolve());
		instance.onWillDismiss.and.returnValue(Promise.resolve());
		instance.enableBack.and.returnValue(true);
		instance.isFirst.and.returnValue(false);
		instance.isLast.and.returnValue(false);
		instance.pageRef.and.returnValue({});
		instance.getContent.and.returnValue({});
		instance.contentRef.and.returnValue(Promise.resolve());
		instance.hasNavbar.and.returnValue(true);
		instance.index.and.returnValue(true);
		instance.subscribe.and.returnValue(Observable.of({}));
		instance.getNav.and.returnValue(NavControllerMock.instance());
		instance.getIONContent.and.returnValue({});

		instance['writeReady'] ={
			emit(): void {

			},
			subscribe(): any {

			}
		};

		instance['readReady'] ={
			emit(): void {

			},
			subscribe(): any {

			}
		};

		instance['component'] = {};
		instance['data'] = NavParamsMock.instance();
		instance['instance'] = {};
		instance['id'] = '';

		return instance;
	}
}
