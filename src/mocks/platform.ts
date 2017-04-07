import { Platform }   from 'ionic-angular';

export class PlatformMock {
	public static instance(): Platform {

		let instance = jasmine.createSpyObj('Platform', [
			'dir',
			'getQueryParam',
			'height',
			'is',
			'isLandscape',
			'isPortrait',
			'isRTL',
			'lang',
			'pause',
			'platforms',
			'ready',
			'registerBackButtonAction',
			'resize',
			'resume',
			'setDir',
			'setLang',
			'testUserAgent',
			'url',
			'version',
			'width'
		]);

		instance.dir.and.returnValue('');
		instance.getQueryParam.and.returnValue('');
		instance.height.and.returnValue(0);
		instance.is.and.returnValue(true);
		instance.isLandscape.and.returnValue(false);
		instance.isRTL.and.returnValue(true);
		instance.lang.and.returnValue('en');
		instance.platforms.and.returnValue([]);
		instance.ready.and.returnValue(Promise.resolve());
		instance.registerBackButtonAction.and.returnValue(() => {});
		instance.url.and.returnValue('');
		instance.versions.and.returnValue([]);
		instance.width.and.returnValue(0);

		return instance;
	}
}
