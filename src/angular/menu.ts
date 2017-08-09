export class MenuMock {
    public static instance(): any {
        let instance = jasmine.createSpyObj('Menu', ['blank', 'open', 'close']);
        instance['content'] = 'menu content';
        instance['enabled'] = true;
        instance['id'] = 'menuId';
        instance['persistent'] = true;
        instance['side'] = 'left';
        instance['swipeEnabled'] = true;
        instance['type'] = 'reveal';

        instance.open.and.returnValue(Promise.resolve(true));
        instance.close.and.returnValue(Promise.resolve(true));

        return instance;
    }
}
