import { BaseMock } from '../base.mock';

const METHODS = ['blank', 'open', 'close'];

export class MenuMock extends BaseMock {
    constructor() {
        super('Menu', METHODS);
        this.setProperty('content', 'menu content');
        this.setProperty('enabled', true);
        this.setProperty('id', 'menuId');
        this.setProperty('persistent', true);
        this.setProperty('side', 'left');
        this.setProperty('swipeEnabled', true);
        this.setProperty('type', 'reveal');
        this.setReturn('open', Promise.resolve(true));
        this.setReturn('close', Promise.resolve(true));
    }

    public static instance(): any {
        return new MenuMock();
    }
}
