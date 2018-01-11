import { ArrayObservable }      from 'rxjs/observable/ArrayObservable';
import { NavParamsMock }        from './nav-params';
import { NavControllerMock }    from './nav-controller';

export class ViewControllerMock {
	private static staticInstance: any = null;

	//HACK- https://github.com/stonelasley/ionic-mocks/issues/29
	private static navController(): any {
		let instance: any = jasmine.createSpyObj('NavController', [
			'goToRoot',
			'initPane',
			'paneChanged',
			'push',
			'insert',
			'insertPage',
			'pop',
			'popTo',
			'popToRoot',
			'popAll',
			'remove',
			'removeView',
			'setRoot',
			'setPages',
			'hasChildren',
			'getActiveChildNav',
			'registerChildNav',
			'unregisterChildNav',
			'destroy',
			'swipeBackStart',
			'swipeBackProgress',
			'swipeBackEnd',
			'canSwipeBack',
			'canGoBack',
			'isTransitioning',
			'setTransitioning',
			'getActive',
			'isActive',
			'getByIndex',
			'getPrevious',
			'first',
			'last',
			'indexOf',
			'length',
			'getViews',
			'isSwipeBackEnabled',
			'dismissPageChangeViews',
			'setViewPort',
			'resize',
			'viewDidEnter',
			'viewDidLeave',
			'viewDidLoad',
			'viewWillEnter',
			'viewWillLeave',
			'viewWillUnload'
		]);

		instance.goToRoot.and.returnValue(Promise.resolve());
		instance.initPane.and.returnValue(1);

		instance['root'] = ViewControllerMock.instance();
		instance['rootParams'] = {};

		instance.push.and.returnValue(Promise.resolve());
		instance.insert.and.returnValue(Promise.resolve());
		instance.insertPage.and.returnValue(Promise.resolve());
		instance.pop.and.returnValue(Promise.resolve());
		instance.popTo.and.returnValue(Promise.resolve());
		instance.popToRoot.and.returnValue(Promise.resolve());
		instance.popAll.and.returnValue(Promise.resolve());
		instance.remove.and.returnValue(Promise.resolve());
		instance.removeView.and.returnValue(Promise.resolve());
		instance.setRoot.and.returnValue(Promise.resolve());
		instance.setPages.and.returnValue(Promise.resolve());
		instance.hasChildren.and.returnValue(true);
		instance.canSwipeBack.and.returnValue(true);
		instance.canGoBack.and.returnValue(true);
		instance.isTransitioning.and.returnValue(false);
		instance.getActive.and.returnValue({});
		instance.isActive.and.returnValue(true);
		instance.getByIndex.and.returnValue();
		instance.getPrevious.and.returnValue();
		instance.first.and.returnValue({});
		instance.last.and.returnValue({});
		instance.indexOf.and.returnValue(0);
		instance.length.and.returnValue(0);
		instance.getViews.and.returnValue([]);
		instance.isSwipeBackEnabled.and.returnValue(true);
		instance.viewDidEnter = ArrayObservable.of();
		instance.viewDidLeave = ArrayObservable.of();
		instance.viewDidLoad = ArrayObservable.of();
		instance.viewWillEnter = ArrayObservable.of();
		instance.viewWillLeave = ArrayObservable.of();
		instance.viewWillUnload = ArrayObservable.of();
	}

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

		instance.willEnter.and.returnValue(ArrayObservable.of({}));
		instance.didEnter.and.returnValue(ArrayObservable.of({}));
		instance.willLeave.and.returnValue(ArrayObservable.of({}));
		instance.didLeave.and.returnValue(ArrayObservable.of({}));
		instance.willUnload.and.returnValue(ArrayObservable.of({}));
		instance.didUnload.and.returnValue(ArrayObservable.of({}));
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
		instance.subscribe.and.returnValue(ArrayObservable.of({}));
		instance.getNav.and.returnValue({});
		instance.getIONContent.and.returnValue({});

		instance['writeReady'] = {
			emit(): void {

			},
			subscribe(): any {

			}
		};

		instance['readReady'] = {
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
