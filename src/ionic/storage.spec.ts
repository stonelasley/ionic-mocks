import {StorageMock} from './storage';

describe('StorageMock', () => {

    let classUnderTest;

    beforeEach(() => {
       classUnderTest = StorageMock.instance();
    });

    it('should initialize', () => {
        expect(StorageMock.instance).toBeDefined();
    });

    describe('driver', () => {

        it('should return string', () => {

            expect(classUnderTest.driver).toEqual('');
        });

    });

    describe('ready', () => {

        it('should return spyable Promise', done => {
            classUnderTest.ready()
                .then(res => {
                    expect(classUnderTest.ready).toHaveBeenCalled();
                    expect(res).toEqual({});
                    done();
                });
        });

    });

    describe('set', () => {

        it('should return spyable Promise', done => {
                classUnderTest.set('foo')
                    .then(res => {
                        expect(classUnderTest.set).toHaveBeenCalledWith('foo');
                        expect(res).toBeUndefined();
                        done();
                    });
        });

    });

    describe('get', () => {


        it('should return spyable Promise with passed parameter', done => {
            classUnderTest = StorageMock.instance('foo', 'bar');
                classUnderTest.get('foo')
                    .then(res => {
                        expect(classUnderTest.get).toHaveBeenCalledWith('foo');
                        expect(res).toEqual('bar');
                        done();
                    });
        });

        it('should return spyable Promise with default value if no arguments', done => {
            classUnderTest.get()
                .then(res => {
                    expect(classUnderTest.get).toHaveBeenCalled();
                    expect(res).toEqual('value1');
                    done();
                });
        });

    });

    describe('remove', () => {

        it('should return spyable Promise', done => {
            classUnderTest.remove()
                .then(res => {
                    expect(classUnderTest.remove).toHaveBeenCalled();
                    expect(res).toBeUndefined();
                    done();
                });
        });

    });

    describe('clear', () => {

        it('should return spyable Promise', done => {
            classUnderTest.clear()
                .then(res => {
                    expect(classUnderTest.clear).toHaveBeenCalled();
                    expect(res).toBeUndefined();
                    done();
                });
        });

    });

    describe('length', () => {

        it('should return spyable Promise that resolves to 1', done => {
            classUnderTest.length()
                .then(res => {
                    expect(classUnderTest.length).toHaveBeenCalled();
                    expect(res).toEqual(1);
                    done();
                });
        });

    });

    describe('keys', () => {

        it('should return spyable Promise that resolves to default key', done => {
            classUnderTest.keys()
                .then(res => {
                    expect(classUnderTest.keys).toHaveBeenCalled();
                    expect(res).toEqual(['key1']);
                    done();
                });
        });

    });

    describe('foreEach', () => {

        it('should return spyable Promise', done => {
            classUnderTest.forEach()
                .then(res => {
                    expect(classUnderTest.forEach).toHaveBeenCalled();
                    expect(res).toBeUndefined();
                    done();
                });
        });

    });
});
