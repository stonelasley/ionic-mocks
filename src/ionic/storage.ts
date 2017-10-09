import { createSpyObj } from '../utilities/create-spy';

export class StorageMock {
    public static instance(key: any = 'key1', value: any = 'value1'): any {

        let instance = createSpyObj('Storage', [
            'driver',
            'ready',
            'get',
            'set',
            'remove',
            'clear',
            'length',
            'keys',
            'forEach'
        ]);

        instance['driver'] = '';

        instance.ready.and.returnValue(Promise.resolve({}));
        instance.set.and.returnValue(Promise.resolve());
        instance.get.and.returnValue(Promise.resolve(value));
        instance.remove.and.returnValue(Promise.resolve());
        instance.clear.and.returnValue(Promise.resolve());
        instance.length.and.returnValue(Promise.resolve(1));
        instance.keys.and.returnValue(Promise.resolve([key]));
        instance.forEach.and.returnValue(Promise.resolve());

        return instance;
    }
}
