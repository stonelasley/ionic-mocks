import {ToastMock}  from './toast';

export class ToastControllerMock {
    public static instance(toast?: ToastMock): any {

        let instance = jasmine.createSpyObj('ToastController', ['create']);
        instance.create.and.returnValue(toast || ToastMock.instance());

        return instance;
    }
}
