import { PlatformMock } from './platform';

describe('PlatformMock', () => {
    let classUnderTest;

    beforeEach(() => {
        classUnderTest = new PlatformMock();
    });

    describe('dir', () => {
        it('should be defined', () => {
            expect(classUnderTest.dir).toBeDefined();
        });

        it('should return empty string', () => {
            expect(classUnderTest.dir()).toEqual('');
        });
    });

    describe('getQueryParam', () => {
        it('should be defined', () => {
            expect(classUnderTest.getQueryParam).toBeDefined();
        });

        it('should return empty string', () => {
            expect(classUnderTest.getQueryParam()).toEqual('');
        });
    });

    describe('height', () => {
        it('should be defined', () => {
            expect(classUnderTest.height).toBeDefined();
        });

        it('should return 0', () => {
            expect(classUnderTest.height()).toEqual(0);
        });
    });

    describe('is', () => {
        it('should be defined', () => {
            expect(classUnderTest.is).toBeDefined();
        });

        it('should return true', () => {
            expect(classUnderTest.is()).toEqual(true);
        });
    });

    describe('isLandscape', () => {
        it('should be defined', () => {
            expect(classUnderTest.isLandscape).toBeDefined();
        });

        it('should return false', () => {
            expect(classUnderTest.isLandscape()).toEqual(false);
        });
    });

    describe('isPortrait', () => {
        it('should be defined', () => {
            expect(classUnderTest.isPortrait).toBeDefined();
        });

        it('should return true', () => {
            expect(classUnderTest.isPortrait()).toBe(true);
        });
    });

    describe('isRTL', () => {
        it('should be defined', () => {
            expect(classUnderTest.isRTL).toBeDefined();
        });

        it('should return false', () => {
            expect(classUnderTest.isRTL()).toBe(false);
        });
    });

    describe('lang', () => {
        it('should be defined', () => {
            expect(classUnderTest.lang).toBeDefined();
        });

        it('should return en', () => {
            expect(classUnderTest.lang()).toEqual('en');
        });
    });

    describe('pause', () => {
        it('should be defined', () => {
            expect(classUnderTest.pause).toBeDefined();
        });
    });

    describe('platforms', () => {
        it('should be defined', () => {
            expect(classUnderTest.platforms).toBeDefined();
        });

        it('should be empty', () => {
            expect(classUnderTest.platforms()).toEqual([]);
        });
    });

    describe('ready', () => {
        it('should be defined', () => {
            expect(classUnderTest.ready).toBeDefined();
        });

        it('should be empty', done => {
            classUnderTest.ready().then(result => {
                expect(result).toBeUndefined(result);
                done();
            });
        });
    });

    describe('registerBackButtonAction', () => {
        it('should be defined', () => {
            expect(classUnderTest.registerBackButtonAction).toBeDefined();
        });

        it('should return Function', () => {
            expect(classUnderTest.registerBackButtonAction()).toEqual(jasmine.any(Function));
        });
    });

    describe('registerListener', () => {
        it('should be defined', () => {
            expect(classUnderTest.registerListener).toBeDefined();
        });

        it('should return function', () => {
            expect(classUnderTest.registerListener()).toEqual(jasmine.any(Function));
        });
    });

    describe('resize', () => {
        it('should be defined', () => {
            expect(classUnderTest.resize).toBeDefined();
        });
    });

    describe('resume', () => {
        it('should be defined', () => {
            expect(classUnderTest.resume).toBeDefined();
        });
    });

    describe('setDir', () => {
        it('should be defined', () => {
            expect(classUnderTest.setDir).toBeDefined();
        });
    });

    describe('setLang', () => {
        it('should be defined', () => {
            expect(classUnderTest.setLang).toBeDefined();
        });
    });

    describe('testUserAgent', () => {
        it('should be defined', () => {
            expect(classUnderTest.testUserAgent).toBeDefined();
        });
    });

    describe('url', () => {
        it('should be defined', () => {
            expect(classUnderTest.url).toBeDefined();
        });

        it('should return empty string', () => {
            expect(classUnderTest.url()).toEqual('');
        });
    });

    describe('versions', () => {
        it('should be defined', () => {
            expect(classUnderTest.versions).toBeDefined();
        });

        it('should return object', () => {
            expect(classUnderTest.versions()).toEqual({});
        });
    });

    describe('width', () => {
        it('should be defined', () => {
            expect(classUnderTest.width).toBeDefined();
        });

        it('should return 0', () => {
            expect(classUnderTest.width()).toEqual(0);
        });
    });

    describe('doc', () => {
        it('should be defined', () => {
            expect(classUnderTest.doc).toBeDefined();
        });
    });

    describe('win', () => {
        it('should be defined', () => {
            expect(classUnderTest.win).toBeDefined();
        });
    });

    describe('getActiveElement', () => {
        it('should be defined', () => {
            expect(classUnderTest.getActiveElement).toBeDefined();
        });
    });

    describe('raf', () => {
        it('should be defined', () => {
            expect(classUnderTest.raf).toBeDefined();
        });
    });

    describe('hasFocus', () => {
        it('should be defined', () => {
            expect(classUnderTest.hasFocus).toBeDefined();
        });

        it('should return true', () => {
            expect(classUnderTest.hasFocus()).toBeTruthy();
        });
    });

    describe('getElementComputedStyle', () => {
        it('should be defined', () => {
            expect(classUnderTest.getElementComputedStyle).toBeDefined();
        });

        it('should return styles object', () => {
            expect(classUnderTest.getElementComputedStyle()).toEqual(
                jasmine.objectContaining({
                    paddingLeft: '10',
                    paddingTop: '10',
                    paddingRight: '10',
                    paddingBottom: '10'
                })
            );
        });
    });

    describe('timeout', () => {
        it('should be defined', () => {
            expect(classUnderTest.timeout).toBeDefined();
        });

        it('should return function', () => {
            expect(classUnderTest.timeout()).toEqual(jasmine.any(Function));
        });
    });
});
