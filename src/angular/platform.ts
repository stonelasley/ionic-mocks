export class PlatformMock {
	public static instance(): any {

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
			'width',
			'doc',
			'registerListener',
			'win',
			'getActiveElement',
			'raf'
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
		instance.version.and.returnValue([]);
		instance.width.and.returnValue(0);
		instance.doc.and.returnValue(document);
		instance.win.and.returnValue(window);
		instance.getActiveElement.and.returnValue(document['activeElement']);
		instance.raf.and.returnValue(1);

		return instance;
	}
}
