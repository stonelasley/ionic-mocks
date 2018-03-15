"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_spy_1 = require("../utilities/create-spy");
var rxjs_1 = require("rxjs");
var nav_controller_1 = require("./nav-controller");
var AppMock = /** @class */ (function () {
    function AppMock() {
    }
    AppMock.instance = function (navCtrl, viewObservable) {
        var instance = create_spy_1.createSpyObj('App', [
            'getActiveNav',
            'getRootNav',
            'isScrolling',
            'setTitle',
            'viewDidEnter',
            'viewDidLeave',
            'viewDidLoad',
            'viewWillEnter',
            'viewWillLeave',
            'viewWillUnload'
        ]);
        instance.getRootNav.and.returnValue(navCtrl || nav_controller_1.NavControllerMock.instance());
        instance.isScrolling.and.returnValue(false);
        instance.viewDidEnter.and.returnValue(viewObservable || rxjs_1.Observable.of(undefined));
        instance.viewDidLoad.and.returnValue(viewObservable || rxjs_1.Observable.of(undefined));
        instance.viewDidLeave.and.returnValue(viewObservable || rxjs_1.Observable.of(undefined));
        instance.viewWillEnter.and.returnValue(viewObservable || rxjs_1.Observable.of(undefined));
        instance.viewWillUnload.and.returnValue(viewObservable || rxjs_1.Observable.of(undefined));
        instance.viewWillLeave.and.returnValue(viewObservable || rxjs_1.Observable.of(undefined));
        return instance;
    };
    return AppMock;
}());
exports.AppMock = AppMock;
//# sourceMappingURL=app.js.map