import { createSpyObj } from '../utilities/create-spy';

export class TabMock {
    public static instance(): any {
        return createSpyObj('Tab', ['linker']);
    }
}
