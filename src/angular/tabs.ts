import { TabMock } from './tab';
import { BaseMock } from '../base.mock';
import { deprecated } from 'deprecated-decorator';

const METHODS = ['select', 'getSelected', 'ngOnDestroy', 'previousTab', 'viewCtrl'];

export class TabsMock extends BaseMock {

    constructor(defaultTab?: TabMock, selectedTab?: TabMock, previousTab?: TabMock) {
        super('Tabs', METHODS);
        this.spyObj.select.and.returnValue(defaultTab || new TabMock());
        this.spyObj.getSelected.and.returnValue(selectedTab || new TabMock());
        this.spyObj.previousTab.and.returnValue(previousTab || new TabMock());
    }

    @deprecated('new TabsMock()')
    public static instance(defaultTab?: TabMock, selectedTab?: TabMock, previousTab?: TabMock): any {
        return new TabsMock(defaultTab, selectedTab, previousTab);
    }
}
