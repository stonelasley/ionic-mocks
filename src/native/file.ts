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

    this.spyObj.getFreeDiskSpace.and.returnValue(Promise.resolve(64));
    this.spyObj.checkDir.and.returnValue(Promise.resolve(true));
    this.spyObj.createDir.and.returnValue(Promise.resolve());
    this.spyObj.removeDir.and.returnValue(Promise.resolve());
    this.spyObj.moveDir.and.returnValue(Promise.resolve());
    this.spyObj.copyDir.and.returnValue(Promise.resolve());
    this.spyObj.listDir.and.returnValue(Promise.resolve());
    this.spyObj.removeRecursively.and.returnValue(Promise.resolve());
    this.spyObj.checkFile.and.returnValue(Promise.resolve(true));
    this.spyObj.createFile.and.returnValue(Promise.resolve());
    this.spyObj.removeFile.and.returnValue(Promise.resolve());
    this.spyObj.writeFile.and.returnValue(Promise.resolve());
    this.spyObj.writeExistingFile.and.returnValue(Promise.resolve());
    this.spyObj.readAsText.and.returnValue(Promise.resolve('a string'));
    this.spyObj.readAsDataURL.and.returnValue(Promise.resolve('data:,some%20data'));
    this.spyObj.readAsBinaryString.and.returnValue(Promise.resolve('101010'));
    this.spyObj.readAsArrayBuffer.and.returnValue(Promise.resolve(new ArrayBuffer(1)));
    this.spyObj.moveFile.and.returnValue(Promise.resolve());
    this.spyObj.copyFile.and.returnValue(Promise.resolve());
    this.spyObj.resolveLocalFilesystemUrl.and.returnValue(Promise.resolve());
    this.spyObj.resolveDirectoryUrl.and.returnValue(Promise.resolve());
    this.spyObj.getDirectory.and.returnValue(Promise.resolve());
    this.spyObj.getFile.and.returnValue(Promise.resolve());

  }



  public static instance(): any {
    return new FileMock();
  }
}
