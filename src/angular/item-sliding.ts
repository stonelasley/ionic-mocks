import { createSpyObj } from '../utilities/create-spy';

export class ItemSlidingMock {
    public static instance(): any {
        return createSpyObj('ItemSliding', ['close']);
    }
}
