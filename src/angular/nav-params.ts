export class NavParamsMock {
    public static instance(getReturn?: any): any {
        let instance = jasmine.createSpyObj('NavParams', ['get']);
        instance.get.and.returnValue(getReturn);

        return instance;
    }
}
