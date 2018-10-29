export class ModalMock {
    public static instance(): any {
        let _dismissCallback: Function;
        let instance = jasmine.createSpyObj('Modal', ['present', 'dismiss', 'onDidDismiss', 'onWillDismiss']);
        instance.present.and.returnValue(Promise.resolve());

        instance.dismiss.and.callFake(() => {
            _dismissCallback();
            return Promise.resolve();
        });

        instance.onDidDismiss.and.callFake((callback: Function) => {
            _dismissCallback = callback;
        });
        
        instance.onWillDismiss.and.callFake((callback: Function) => {
            _dismissCallback = callback;
        });

        return instance;
    }
}
