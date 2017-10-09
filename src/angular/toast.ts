import { createSpyObj } from '../utilities/create-spy';

export class ToastMock {
    public static instance(): any {
        let instance = createSpyObj('Toast', ['present', 'dismissAll', 'setContent', 'setSpinner']);
        instance.present.and.returnValue(Promise.resolve());

        return instance;
    }
}
