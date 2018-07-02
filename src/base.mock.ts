export abstract class BaseMock {

    protected spyObj: any;

    constructor(baseName: string, methodNames: any[]) {
        this.spyObj = jasmine.createSpyObj(baseName, methodNames);

        methodNames.forEach(methodName => {
            this[methodName] = this.spyObj[methodName];
        });
    }
}
