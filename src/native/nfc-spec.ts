import { NFCMock } from './nfc';

describe('NFC', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new NFCMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('addNdefListener', () => {
        it('should be defined', () => {
            expect(classUnderTest.addNdefListener).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.addNdefListener().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('addTagDiscoveredListener', () => {
        it('should be defined', () => {
            expect(classUnderTest.addTagDiscoveredListener).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.addTagDiscoveredListener().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('addMimeTypeListener', () => {
        it('should be defined', () => {
            expect(classUnderTest.addMimeTypeListener).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.addMimeTypeListener().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('addNdefFormatableListener', () => {
        it('should be defined', () => {
            expect(classUnderTest.addNdefFormatableListener).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.addNdefFormatableListener().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('write', () => {
        it('should be defined', () => {
            expect(classUnderTest.write).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.write().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('makeReadyOnly', () => {
        it('should be defined', () => {
            expect(classUnderTest.makeReadyOnly).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.makeReadyOnly().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('share', () => {
        it('should be defined', () => {
            expect(classUnderTest.share).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.share().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('unshare', () => {
        it('should be defined', () => {
            expect(classUnderTest.unshare).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.unshare().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('erase', () => {
        it('should be defined', () => {
            expect(classUnderTest.erase).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.erase().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('handover', () => {
        it('should be defined', () => {
            expect(classUnderTest.handover).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.handover().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('stopHandover', () => {
        it('should be defined', () => {
            expect(classUnderTest.stopHandover).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.stopHandover().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('showSettings', () => {
        it('should be defined', () => {
            expect(classUnderTest.showSettings).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.showSettings().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('enabled', () => {
        it('should be defined', () => {
            expect(classUnderTest.enabled).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.enabled().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('bytesToString', () => {
        it('should be defined', () => {
            expect(classUnderTest.bytesToString).toBeDefined();
        });

        it('should return empty string', () => {
            expect(classUnderTest.bytesToString()).toEqual('');
        });
    });

    describe('stringToBytes', () => {
        it('should be defined', () => {
            expect(classUnderTest.stringToBytes).toBeDefined();
        });

        it('should return empty array', () => {
            expect(classUnderTest.stringToBytes()).toEqual([]);
        });
    });

    describe('bytesToHexString', () => {
        it('should be defined', () => {
            expect(classUnderTest.bytesToHexString).toBeDefined();
        });

        it('should return empty string', () => {
            expect(classUnderTest.bytesToHexString()).toEqual('');
        });
    });
});
