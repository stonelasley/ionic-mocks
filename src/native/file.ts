import { BaseMock } from '../base.mock';

const METHODS = [
    'getFreeDiskSpace',
    'checkDir',
    'createDir',
    'removeDir',
    'moveDir',
    'copyDir',
    'listDir',
    'removeRecursively',
    'checkFile',
    'createFile',
    'removeFile',
    'writeFile',
    'writeExistingFile',
    'readAsText',
    'readAsDataURL',
    'readAsBinaryString',
    'readAsArrayBuffer',
    'moveFile',
    'copyFile',
    'resolveLocalFilesystemUrl',
    'resolveDirectoryUrl',
    'getDirectory',
    'getFile'
];
export class FileMock extends BaseMock {
    applicationDirectory = 'a-directory';
    applicationStorageDirectory = 'a-directory';
    dataDirectory = 'a-directory';
    cacheDirectory = 'a-directory';
    externalApplicationStorageDirectory = 'a-directory';
    externalDataDirectory = 'a-directory';
    externalCacheDirectory = 'a-directory';
    externalRootDirectory = 'a-directory';
    tempDirectory = 'a-directory';
    syncedDataDirectory = 'a-directory';
    documentsDirectory = 'a-directory';
    sharedDirectory = 'a-directory';
    cordovaFileError: any;

    constructor() {
        super('File', METHODS);

        this.setReturn('getFreeDiskSpace', Promise.resolve(64));
        this.setReturn('checkDir', Promise.resolve(true));
        this.setReturn('createDir', Promise.resolve());
        this.setReturn('removeDir', Promise.resolve());
        this.setReturn('moveDir', Promise.resolve());
        this.setReturn('copyDir', Promise.resolve());
        this.setReturn('listDir', Promise.resolve());
        this.setReturn('removeRecursively', Promise.resolve());
        this.setReturn('checkFile', Promise.resolve(true));
        this.setReturn('createFile', Promise.resolve());
        this.setReturn('removeFile', Promise.resolve());
        this.setReturn('writeFile', Promise.resolve());
        this.setReturn('writeExistingFile', Promise.resolve());
        this.setReturn('readAsText', Promise.resolve('a string'));
        this.setReturn('readAsDataURL', Promise.resolve('data:,some%20data'));
        this.setReturn('readAsBinaryString', Promise.resolve('101010'));
        this.setReturn('readAsArrayBuffer', Promise.resolve(new ArrayBuffer(1)));
        this.setReturn('moveFile', Promise.resolve());
        this.setReturn('copyFile', Promise.resolve());
        this.setReturn('resolveLocalFilesystemUrl', Promise.resolve());
        this.setReturn('resolveDirectoryUrl', Promise.resolve());
        this.setReturn('getDirectory', Promise.resolve());
        this.setReturn('getFile', Promise.resolve());
    }

    public static instance(): any {
        return new FileMock();
    }
}
