import { Observable, of } from 'rxjs';
import { ArrayObservable } from 'rxjs/observable/ArrayObservable';
import { NavControllerMock } from './nav-controller';
import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS: string[] = [
    'getActiveNav',
    'getActiveNavs',
    'getNavByIdOrName',
    'getRootNav',
    'getRootNavs',
    'getRootNavById',
    'isScrolling',
    'setTitle',
    'viewDidEnter',
    'viewDidLeave',
    'viewDidLoad',
    'viewWillEnter',
    'viewWillLeave',
    'viewWillUnload'
];

export class AppMock extends BaseMock {
    constructor(
        private _navCtrl?: NavControllerMock,
        private _viewObservable?: Observable<any>
    ) {
        super('App', METHODS);

        this.spyObj.getActiveNav.and.returnValue(
            _navCtrl || new NavControllerMock()
        );
        this.spyObj.getActiveNavs.and.returnValue(
            _navCtrl || [new NavControllerMock()]
        );
        this.spyObj.getNavByIdOrName.and.returnValue(
            _navCtrl || new NavControllerMock()
        );
        this.spyObj.getRootNav.and.returnValue(
            _navCtrl || new NavControllerMock()
        );
        this.spyObj.getRootNavs.and.returnValue(
            _navCtrl || [new NavControllerMock()]
        );
        this.spyObj.getRootNavById.and.returnValue(
            _navCtrl || new NavControllerMock()
        );
        this.spyObj.isScrolling.and.returnValue(false);
        this.spyObj.viewDidEnter.and.returnValue(
            _viewObservable || of(undefined)
        );
        this.spyObj.viewDidLoad.and.returnValue(
            _viewObservable || of(undefined)
        );
        this.spyObj.viewDidLeave.and.returnValue(
            _viewObservable || of(undefined)
        );
        this.spyObj.viewWillEnter.and.returnValue(
            _viewObservable || of(undefined)
        );
        this.spyObj.viewWillLeave.and.returnValue(
            _viewObservable || of(undefined)
        );
        this.spyObj.viewWillUnload.and.returnValue(
            _viewObservable || of(undefined)
        );
    }

    @deprecated('new AppMock()')
    public static instance(
        navCtrl?: NavControllerMock,
        viewObservable?: Observable<any>
    ): any {
        return new AppMock(navCtrl, viewObservable);
    }
}
