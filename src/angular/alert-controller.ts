import { createSpyObj } from '../utilities/create-spy';
import { AlertMock } from './alert';

export class AlertControllerMock {
    public static instance(alertMock?: AlertMock): any {

        let instance = createSpyObj('AlertController', ['create']);
        instance.create.and.returnValue(alertMock || AlertMock.instance());

        return instance;
    }
}
