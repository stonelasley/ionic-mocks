import { createSpyObj } from '../utilities/create-spy';

export class AlertMock {
    public static instance(): any {
    	let _dismissCallback: Function;
        let instance = createSpyObj('Alert', ['present', 'dismiss', 'onDidDismiss']);
        instance.present.and.returnValue(Promise.resolve());

        instance.dismiss.and.callFake(() => {
            _dismissCallback();
            return Promise.resolve();
        });

        instance.onDidDismiss.and.callFake((callback: Function) => {
            _dismissCallback = callback;
        });

        return instance;
    }
}
