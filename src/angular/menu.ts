import { BaseMock } from '../base.mock';

const METHODS = ['blank', 'open', 'close'];

export class MenuMock extends BaseMock {
    constructor() {
        super('Menu', METHODS);
        this['content'] = 'menu content';
        this['enabled'] = true;
        this['id'] = 'menuId';
        this['persistent'] = true;
        this['side'] = 'left';
        this['swipeEnabled'] = true;
        this['type'] = 'reveal';
        this.spyObj.open.and.returnValue(Promise.resolve(true));
        this.spyObj.close.and.returnValue(Promise.resolve(true));
    }

    public static instance(): any {
        return new MenuMock();
    }
}
