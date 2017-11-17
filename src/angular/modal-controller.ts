import {ModalMock}  from './modal';

export class ModalControllerMock {
    public static instance(modalMock?: ModalMock): any {
        let instance = jasmine.createSpyObj('ModalController', ['create']);
        instance.create.and.callFake(() => {
            return modalMock || new ModalMock().instance();
        });

        return instance;
    }
}
