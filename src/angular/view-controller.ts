import { Observable } from 'rxjs';
import { NavParamsMock } from './nav-params';
import { BaseMock } from '../base.mock';
import deprecated from 'deprecated-decorator';

const METHODS = [
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
];

export class ViewControllerMock extends BaseMock {
    constructor() {
        super('ViewController', METHODS);

        this.setReturn('willEnter', Observable.of({}));
        this.setReturn('didEnter', Observable.of({}));
        this.setReturn('willLeave', Observable.of({}));
        this.setReturn('didLeave', Observable.of({}));
        this.setReturn('willUnload', Observable.of({}));
        this.setReturn('didUnload', Observable.of({}));
        this.setReturn('dismiss', Promise.resolve());
        this.setReturn('onDidDismiss', Promise.resolve());
        this.setReturn('onWillDismiss', Promise.resolve());
        this.setReturn('enableBack', true);
        this.setReturn('isFirst', false);
        this.setReturn('isLast', false);
        this.setReturn('pageRef', {});
        this.setReturn('getContent', {});
        this.setReturn('contentRef', Promise.resolve());
        this.setReturn('hasNavbar', true);
        this.setReturn('index', true);
        this.setReturn('subscribe', Observable.of({}));
        this.setReturn('getNav', {});
        this.setReturn('getIONContent', {});

        this.spyObj['writeReady'] = {
            emit(): void {},
            subscribe(): any {}
        };

        this.spyObj['readReady'] = {
            emit(): void {},
            subscribe(): any {}
        };

        this.spyObj['component'] = {};
        this.spyObj['data'] = new NavParamsMock();
        this.spyObj['instance'] = {};
        this.spyObj['id'] = '';
    }

    @deprecated('use new ViewControllerMock()')
    public static instance(): any {
        return new ViewControllerMock();
    }
}
