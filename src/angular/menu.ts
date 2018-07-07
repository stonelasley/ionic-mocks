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
        this.setReturn('open', Promise.resolve(true));
        this.setReturn('close', Promise.resolve(true));
    }

    public static instance(): any {
        return new MenuMock();
    }
}
