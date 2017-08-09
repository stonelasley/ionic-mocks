export class TabMock {
    public static instance(): any {
        return jasmine.createSpyObj('Tab', ['linker']);
    }
}
