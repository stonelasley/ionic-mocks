export class EventsMock {
    public static instance(): any {
        return jasmine.createSpyObj('events', ['subscribe', 'publish', 'unsubscribe']);
    }
}
