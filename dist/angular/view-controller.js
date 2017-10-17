"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var nav_params_1 = require("./nav-params");
var create_spy_1 = require("../utilities/create-spy");
var ViewControllerMock = /** @class */ (function () {
    function ViewControllerMock() {
    }
    // HACK- https://github.com/stonelasley/ionic-mocks/issues/29
    ViewControllerMock.navController = function () {
        var instance = create_spy_1.createSpyObj('NavController', [
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
        instance.viewDidEnter = rxjs_1.Observable.of();
        instance.viewDidLeave = rxjs_1.Observable.of();
        instance.viewDidLoad = rxjs_1.Observable.of();
        instance.viewWillEnter = rxjs_1.Observable.of();
        instance.viewWillLeave = rxjs_1.Observable.of();
        instance.viewWillUnload = rxjs_1.Observable.of();
    };
    ViewControllerMock.instance = function () {
        var instance = create_spy_1.createSpyObj('ViewController', [
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
        instance.willEnter.and.returnValue(rxjs_1.Observable.of({}));
        instance.didEnter.and.returnValue(rxjs_1.Observable.of({}));
        instance.willLeave.and.returnValue(rxjs_1.Observable.of({}));
        instance.didLeave.and.returnValue(rxjs_1.Observable.of({}));
        instance.willUnload.and.returnValue(rxjs_1.Observable.of({}));
        instance.didUnload.and.returnValue(rxjs_1.Observable.of({}));
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
        instance.subscribe.and.returnValue(rxjs_1.Observable.of({}));
        instance.getNav.and.returnValue({});
        instance.getIONContent.and.returnValue({});
        instance['writeReady'] = {
            emit: function () {
            },
            subscribe: function () {
            }
        };
        instance['readReady'] = {
            emit: function () {
            },
            subscribe: function () {
            }
        };
        instance['component'] = {};
        instance['data'] = nav_params_1.NavParamsMock.instance();
        instance['instance'] = {};
        instance['id'] = '';
        return instance;
    };
    ViewControllerMock.staticInstance = null;
    return ViewControllerMock;
}());
exports.ViewControllerMock = ViewControllerMock;
//# sourceMappingURL=view-controller.js.map