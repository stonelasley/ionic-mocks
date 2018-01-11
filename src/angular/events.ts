import { createSpyObj } from '../utilities/create-spy';

export class EventsMock {
    public static instance(): any {
        return createSpyObj('events', ['subscribe', 'publish', 'unsubscribe']);
    }
}
