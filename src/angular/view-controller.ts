import { Observable, of } from 'rxjs';
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

        this.spyObj.willEnter.and.returnValue(of({}));
        this.spyObj.didEnter.and.returnValue(of({}));
        this.spyObj.willLeave.and.returnValue(of({}));
        this.spyObj.didLeave.and.returnValue(of({}));
        this.spyObj.willUnload.and.returnValue(of({}));
        this.spyObj.didUnload.and.returnValue(of({}));
        this.spyObj.dismiss.and.returnValue(Promise.resolve());
        this.spyObj.onDidDismiss.and.returnValue(Promise.resolve());
        this.spyObj.onWillDismiss.and.returnValue(Promise.resolve());
        this.spyObj.enableBack.and.returnValue(true);
        this.spyObj.isFirst.and.returnValue(false);
        this.spyObj.isLast.and.returnValue(false);
        this.spyObj.pageRef.and.returnValue({});
        this.spyObj.getContent.and.returnValue({});
        this.spyObj.contentRef.and.returnValue(Promise.resolve());
        this.spyObj.hasNavbar.and.returnValue(true);
        this.spyObj.index.and.returnValue(true);
        this.spyObj.subscribe.and.returnValue(of({}));
        this.spyObj.getNav.and.returnValue({});
        this.spyObj.getIONContent.and.returnValue({});

        this.spyObj['writeReady'] = {
            emit(): void {},
            subscribe(): any {}
        };

        this.spyObj['readReady'] = {
            emit(): void {},
            subscribe(): any {}
        };

        this.spyObj['component'] = {};
        this.spyObj['data'] = NavParamsMock.instance();
        this.spyObj['instance'] = {};
        this.spyObj['id'] = '';
    }

    @deprecated('use new ViewControllerMock()')
    public static instance(): any {
        return new ViewControllerMock();
    }
}
