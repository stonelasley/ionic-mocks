import { TabsMock } from './tabs';
import { TabMock } from './tab';

describe('Tabs', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new TabsMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('select', () => {
        it('should be defined', () => {
            expect(classUnderTest.select).toBeDefined();
        });

        it('should return Tab', () => {
            expect(classUnderTest.select()).toEqual(jasmine.any(Object));
        });

        it('should return provided Tab', () => {
            const tab = new TabMock();
            classUnderTest = new TabsMock(tab);

            const result = classUnderTest.select();

            expect(result).toBe(tab);
        });
    });

    describe('getSelected', () => {
        it('should be defined', () => {
            expect(classUnderTest.getSelected).toBeDefined();
        });

        it('should return Tab', () => {
            expect(classUnderTest.getSelected()).toEqual(jasmine.any(Object));
        });

        it('should return provided Tab', () => {
            const tab = new TabMock();
            classUnderTest = new TabsMock(null, tab);

            const result = classUnderTest.getSelected();

            expect(result).toBe(tab);
        });
    });

    describe('previousTab', () => {
        it('should be defined', () => {
            expect(classUnderTest.previousTab).toBeDefined();
        });

        it('should return Tab', () => {
            expect(classUnderTest.previousTab()).toEqual(jasmine.any(Object));
        });

        it('should return provided Tab', () => {
            const tab = new TabMock();
            classUnderTest = new TabsMock(null, null, tab);

            const result = classUnderTest.previousTab();

            expect(result).toBe(tab);
        });
    });

    describe('viewCtrl', () => {
        it('should be defined', () => {
            expect(classUnderTest.viewCtrl).toBeDefined();
        });
    });

    describe('ngOnDestroy', () => {
        it('should be defined', () => {
            expect(classUnderTest.ngOnDestroy).toBeDefined();
        });
    });
});
