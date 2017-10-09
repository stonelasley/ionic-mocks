import { createSpyObj } from '../utilities/create-spy';

export class ModalMock {
    public static instance(): any {
    	let _dismissCallback: Function;
        let instance = createSpyObj('Modal', ['present', 'dismiss', 'onDidDismiss']);
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
