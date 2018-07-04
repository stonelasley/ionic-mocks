import { TabMock } from './tab';
import { BaseMock } from '../base.mock';
import { deprecated } from 'deprecated-decorator';

const METHODS = ['select', 'getSelected', 'ngOnDestroy', 'previousTab', 'viewCtrl'];

export class TabsMock extends BaseMock {

    constructor(defaultTab?: TabMock, selectedTab?: TabMock, previousTab?: TabMock) {
        super('Tabs', METHODS);
        this.spyObj.select.and.returnValue(defaultTab || TabMock.instance());
        this.spyObj.getSelected.and.returnValue(selectedTab || TabMock.instance());
        this.spyObj.previousTab.and.returnValue(previousTab || TabMock.instance());
    }

    @deprecated('new TabsMock()')
    public static instance(defaultTab?: TabMock, selectedTab?: TabMock, previousTab?: TabMock): any {
        return new TabsMock(defaultTab, selectedTab, previousTab);
    }
}
