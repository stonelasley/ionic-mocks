import { NativeStorage } from './native-storage';

describe('NativeStorage', () => {
    let classUnderTest: any;

    beforeEach(() => {
        classUnderTest = new NativeStorage();
    });

    it('should be defined', () => {
        expect(classUnderTest).toBeDefined();
    });

    describe('setItem', () => {
        it('should be defined', () => {
            expect(classUnderTest.setItem).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.setItem().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });

        it('should return provided item', done => {
            const item = { val: 'random' };
            classUnderTest = new NativeStorage(item);

            classUnderTest.setItem().then(result => {
                expect(result).toBe(item);
                done();
            });
        });
    });

    describe('getItem', () => {
        it('should be defined', () => {
            expect(classUnderTest.getItem).toBeDefined();
        });

        it('should return Promise', done => {
            classUnderTest.getItem().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });

        it('should return provided item', done => {
            const item = { val: 'random' };
            classUnderTest = new NativeStorage(item);

            classUnderTest.getItem().then(result => {
                expect(result).toBe(item);
                done();
            });
        });
    });

    describe('keys', () => {
        it('should be defined', () => {
            expect(classUnderTest.keys).toBeDefined();
        });

        it('should return Promise', done => {
            classUnderTest.keys().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });

        it('should return provided keys', done => {
            const keys = ['one', 'two'];
            classUnderTest = new NativeStorage(null, keys);

            classUnderTest.keys().then(result => {
                expect(result).toBe(keys);
                done();
            });
        });
    });

    describe('remove', () => {
        it('should be defined', () => {
            expect(classUnderTest.remove).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.remove().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });

    describe('clear', () => {
        it('should be defined', () => {
            expect(classUnderTest.clear).toBeDefined();
        });

        it('should return empty Promise', done => {
            classUnderTest.clear().then(result => {
                expect(result).toBeUndefined();
                done();
            });
        });
    });
});
