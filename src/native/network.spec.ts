import { NetworkMock } from './network';

describe('Network', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new NetworkMock();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('type', () => {
        it('should be defined', () => {
            expect(classUnderTest.type).toBeDefined();
        });

        it('should return wifi', () => {
            expect(classUnderTest.type()).toEqual('wifi');
        });

        it('should return provided type', () => {
            const network = 'anything';
            classUnderTest = new NetworkMock(network);

            expect(classUnderTest.type()).toBe(network);
        });
    });

    describe('downlinkMax', () => {
        it('should be defined', () => {
            expect(classUnderTest.downlinkMax).toBeDefined();
        });

        it('should return 42', () => {
            expect(classUnderTest.downlinkMax()).toEqual('42');
        });
    });

    describe('onchange', () => {
        it('should be defined', () => {
            expect(classUnderTest.onchange).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.onchange().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('onDisconnect', () => {
        it('should be defined', () => {
            expect(classUnderTest.onDisconnect).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.onDisconnect().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('onConnect', () => {
        it('should be defined', () => {
            expect(classUnderTest.onConnect).toBeDefined();
        });

        it('should return empty observable', done => {
            classUnderTest.onConnect().subscribe(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
