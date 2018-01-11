export class AlertMock {
    public static instance(): any {
        let _dismissCallback: Function;
        let instance = jasmine.createSpyObj('Alert', ['present', 'dismiss', 'onDidDismiss']);
        instance.present.and.returnValue(Promise.resolve());

        instance.dismiss.and.callFake(() => {
            _dismissCallback();
            return Promise.resolve();
        });

        instance.onDidDismiss.and.callFake((callback: Function) => {
            if (callback) {
                _dismissCallback = callback;
            }
        });

        return instance;
    }
}
