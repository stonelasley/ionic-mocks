import { EventsMock } from './events';

describe('events', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = EventsMock.instance();
    });

    describe('subscribe', () => {
        it('should be defined', () => {
            expect(classUnderTest.subscribe).toBeDefined();
        });
    });

    describe('publish', () => {
        it('should be defined', () => {
            expect(classUnderTest.publish).toBeDefined();
        });
    });

    describe('unsubscribe', () => {
        it('should be defined', () => {
            expect(classUnderTest.unsubscribe).toBeDefined();
        });
    });
});
