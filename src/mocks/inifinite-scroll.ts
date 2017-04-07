import { InfiniteScroll }   from 'ionic-angular';

export class InfiniteScrollMock {
	public static instance(): InfiniteScroll {

		return jasmine.createSpyObj('InfiniteScroll', ['complete', 'enable', 'waitFor']);
	}
}
