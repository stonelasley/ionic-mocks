import { Events } from 'ionic-angular';

export class EventsMock {
	public static instance(): Events {
		return jasmine.createSpyObj('events', ['subscribe', 'publish', 'unsubscribe']);
	}
}