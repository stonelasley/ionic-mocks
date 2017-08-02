export class PopoverMock {
    public static instance(): any {
        let instance = jasmine.createSpyObj('Popover', ['present', 'dismissAll', 'setContent', 'setSpinner']);
        instance.present.and.returnValue(Promise.resolve());

        return instance;
    }
}
