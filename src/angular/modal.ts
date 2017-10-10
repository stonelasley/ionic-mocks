export class ModalMock {
    public static instance(): any {
    	let _dismissCallback: Function;
        let instance = jasmine.createSpyObj('Modal', ['present', 'dismiss', 'onDidDismiss']);
        instance.present.and.returnValue(Promise.resolve());
        
        instance.dismiss.and.callFake((myArgs) => {
            _dismissCallback(myArgs);
            return Promise.resolve();
        });

        instance.onDidDismiss.and.callFake((callback: Function) => {
            _dismissCallback = callback;
        });

        return instance;
    }
}
