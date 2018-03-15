import { createSpyObj } from '../utilities/create-spy';
import { ModalMock } from './modal';

export class ModalControllerMock {
    public static instance(modalMock?: ModalMock): any {
        let instance = createSpyObj('ModalController', ['create']);
        instance.create.and.returnValue(modalMock || ModalMock.instance());

        return instance;
    }
}
