import { createSpyObj } from '../utilities/create-spy';

export class PopoverMock {
    public static instance(): any {
        let instance = createSpyObj('Popover', ['present', 'dismissAll', 'setContent', 'setSpinner']);
        instance.present.and.returnValue(Promise.resolve());

        return instance;
    }
}
