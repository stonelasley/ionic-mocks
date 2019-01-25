import { Observable, of } from 'rxjs';
import { ViewControllerMock } from './view-controller';
import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = [
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
];

export class NavControllerMock extends BaseMock {
    constructor() {
        super('NavController', METHODS);

        this.spyObj.goToRoot.and.returnValue(Promise.resolve());
        this.spyObj.initPane.and.returnValue(1);
        this.spyObj.push.and.returnValue(Promise.resolve());
        this.spyObj.insert.and.returnValue(Promise.resolve());
        this.spyObj.insertPage.and.returnValue(Promise.resolve());
        this.spyObj.pop.and.returnValue(Promise.resolve());
        this.spyObj.popTo.and.returnValue(Promise.resolve());
        this.spyObj.popToRoot.and.returnValue(Promise.resolve());
        this.spyObj.popAll.and.returnValue(Promise.resolve());
        this.spyObj.remove.and.returnValue(Promise.resolve());
        this.spyObj.removeView.and.returnValue(Promise.resolve());
        this.spyObj.setRoot.and.returnValue(Promise.resolve());
        this.spyObj.setPages.and.returnValue(Promise.resolve());
        this.spyObj.hasChildren.and.returnValue(true);
        this.spyObj.canSwipeBack.and.returnValue(true);
        this.spyObj.canGoBack.and.returnValue(true);
        this.spyObj.isTransitioning.and.returnValue(false);
        this.spyObj.isActive.and.returnValue(true);
        this.spyObj.getActive.and.returnValue(new ViewControllerMock());
        this.spyObj.getByIndex.and.returnValue(new ViewControllerMock());
        this.spyObj.getPrevious.and.returnValue(new ViewControllerMock());
        this.spyObj.first.and.returnValue(new ViewControllerMock());
        this.spyObj.last.and.returnValue(new ViewControllerMock());
        this.spyObj.indexOf.and.returnValue(0);
        this.spyObj.getViews.and.returnValue([]);
        this.spyObj.isSwipeBackEnabled.and.returnValue(true);
        this.spyObj.viewDidEnter = of();
        this.spyObj.viewDidLeave = of();
        this.spyObj.viewDidLoad = of();
        this.spyObj.viewWillEnter = of();
        this.spyObj.viewWillLeave = of();
        this.spyObj.viewWillUnload = of();
        this.spyObj['length'].and.returnValue(0);
        this.spyObj['root'] = new ViewControllerMock();
        this.spyObj['rootParams'] = {};
    }

    @deprecated('new NavControllerMock()')
    public static instance(): any {
        return new NavControllerMock();
    }
}
