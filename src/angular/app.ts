import {createSpyObj}       from '../utilities/create-spy';
import {Observable}         from 'rxjs/Observable';
import {ArrayObservable}    from 'rxjs/observable/ArrayObservable';
import {NavControllerMock}  from './nav-controller';

export class AppMock {
    public static instance(navCtrl?: NavControllerMock, viewObservable?: Observable<any>): any {

        let instance = createSpyObj('App', [
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

        instance.getRootNav.and.returnValue(navCtrl || NavControllerMock.instance());
        instance.isScrolling.and.returnValue(false);
        instance.viewDidEnter.and.returnValue(viewObservable || ArrayObservable.of(undefined));
        instance.viewDidLoad.and.returnValue(viewObservable || ArrayObservable.of(undefined));
        instance.viewDidLeave.and.returnValue(viewObservable || ArrayObservable.of(undefined));
        instance.viewWillEnter.and.returnValue(viewObservable || ArrayObservable.of(undefined));
        instance.viewWillUnload.and.returnValue(viewObservable || ArrayObservable.of(undefined));
        instance.viewWillLeave.and.returnValue(viewObservable || ArrayObservable.of(undefined));

        return instance;
    }
}
