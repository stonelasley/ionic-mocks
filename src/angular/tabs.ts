import { TabMock } from './tab';
import { createSpyObj } from '../utilities/create-spy';

export class TabsMock {
    public static instance(defaultTab?: TabMock, selectedTab?: TabMock, previousTab?: TabMock): any {
        let instance = createSpyObj('Tabs', [
            'select',
            'getSelected',
            'ngOnDestroy',
            'previousTab',
            'viewCtrl'
        ]);

        instance.select.and.returnValue(defaultTab || TabMock.instance());
        instance.getSelected.and.returnValue(selectedTab || TabMock.instance());
        instance.previousTab.and.returnValue(previousTab || TabMock.instance());

        return instance;
    }
}
