export function createSpyObj(baseName: string, methodNames: string[]) {
    const obj: any = {};
    for (let i: number = 0; i < methodNames.length; i++) {
        obj[methodNames[i]] = jasmine.createSpy(baseName, () => { });
    }
    return obj;
}
