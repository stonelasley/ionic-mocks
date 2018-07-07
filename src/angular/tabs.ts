import { TabMock } from './tab';
import { BaseMock } from '../base.mock';
import { deprecated } from 'deprecated-decorator';

const METHODS = ['select', 'getSelected', 'ngOnDestroy', 'previousTab', 'viewCtrl'];

export class TabsMock extends BaseMock {
    constructor(defaultTab?: TabMock, selectedTab?: TabMock, previousTab?: TabMock) {
        super('Tabs', METHODS);
        this.setReturn('select', defaultTab || new TabMock());
        this.setReturn('getSelected', selectedTab || new TabMock());
        this.setReturn('previousTab', previousTab || new TabMock());
    }

    @deprecated('new TabsMock()')
    public static instance(defaultTab?: TabMock, selectedTab?: TabMock, previousTab?: TabMock): any {
        return new TabsMock(defaultTab, selectedTab, previousTab);
    }
}
