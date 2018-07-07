export abstract class BaseMock {

    protected spyObj: any;

    constructor(baseName: string, methodNames: any[]) {
        this.spyObj = jasmine.createSpyObj(baseName, methodNames);
        Object.assign(this, this.spyObj);
    }

    setReturn(method: string, returnValue: any): void {
        this.spyObj[method].and.returnValue(returnValue);
    }

    setProperty(property: string, returnValue: any): void {
        this[property] = returnValue;
    }
}
