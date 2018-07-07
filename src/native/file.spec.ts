import { FileMock } from './file';

describe('FileMock', () => {
  let file;

  beforeEach(() => {
    file = new FileMock();
  });

  it('should initialise', () => {
    expect(file).toBeDefined();
  });

  describe('getFreeDiskSpace', () => {
    it('should should return 64', (done) => {
      file.getFreeDiskSpace().then(res => {
        expect(file.getFreeDiskSpace).toHaveBeenCalled();
        expect(res).toEqual(64);
        done();
      });
    });
  });

  describe('checkDir', () => {
    it('should should return true', (done) => {
      file.checkDir().then(res => {
        expect(file.checkDir).toHaveBeenCalled();
        expect(res).toEqual(true);
        done();
      });
    });
  });

  describe('createDir', () => {
    it('should should have been called', (done) => {
      file.createDir().then(res => {
        expect(file.createDir).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('removeDir', () => {
    it('should should have been called', (done) => {
      file.removeDir().then(res => {
        expect(file.removeDir).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('moveDir', () => {
    it('should should have been called', (done) => {
      file.moveDir().then(res => {
        expect(file.moveDir).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('copyDir', () => {
    it('should should have been called', (done) => {
      file.copyDir().then(res => {
        expect(file.copyDir).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('listDir', () => {
    it('should should have been called', (done) => {
      file.listDir().then(res => {
        expect(file.listDir).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('removeRecursively', () => {
    it('should should have been called', (done) => {
      file.removeRecursively().then(res => {
        expect(file.removeRecursively).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('checkFile', () => {
    it('should should return true', (done) => {
      file.checkFile().then(res => {
        expect(file.checkFile).toHaveBeenCalled();
        expect(res).toEqual(true);
        done();
      });
    });
  });

  describe('createFile', () => {
    it('should should have been called', (done) => {
      file.createFile().then(res => {
        expect(file.createFile).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('removeFile', () => {
    it('should should have been called', (done) => {
      file.removeFile().then(res => {
        expect(file.removeFile).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('writeFile', () => {
    it('should should have been called', (done) => {
      file.writeFile().then(res => {
        expect(file.writeFile).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('writeExistingFile', () => {
    it('should should have been called', (done) => {
      file.writeExistingFile().then(res => {
        expect(file.writeExistingFile).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('readAsText', () => {
    it('should should return \'a string\'', (done) => {
      file.readAsText().then(res => {
        expect(file.readAsText).toHaveBeenCalled();
        expect(res).toEqual('a string');
        done();
      });
    });
  });

  describe('readAsDataURL', () => {
    it('should should return \'data: , some % 20data\'', (done) => {
      file.readAsDataURL().then(res => {
        expect(file.readAsDataURL).toHaveBeenCalled();
        expect(res).toEqual('data:,some%20data');
        done();
      });
    });
  });

  describe('readAsBinaryString', () => {
    it('should should return \'101010\'', (done) => {
      file.readAsBinaryString().then(res => {
        expect(file.readAsBinaryString).toHaveBeenCalled();
        expect(res).toEqual('101010');
        done();
      });
    });
  });

  describe('readAsArrayBuffer', () => {
    it('should should return an ArrayBuffer one byte long', (done) => {
      file.readAsArrayBuffer().then(res => {
        expect(file.readAsArrayBuffer).toHaveBeenCalled();
        expect(res.byteLength).toEqual(1);
        done();
      });
    });
  });

  describe('moveFile', () => {
    it('should should have been called', (done) => {
      file.moveFile().then(res => {
        expect(file.moveFile).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('copyFile', () => {
    it('should should have been called', (done) => {
      file.copyFile().then(res => {
        expect(file.copyFile).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('resolveLocalFilesystemUrl', () => {
    it('should should have been called', (done) => {
      file.resolveLocalFilesystemUrl().then(res => {
        expect(file.resolveLocalFilesystemUrl).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('resolveDirectoryUrl', () => {
    it('should should have been called', (done) => {
      file.resolveDirectoryUrl().then(res => {
        expect(file.resolveDirectoryUrl).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('getDirectory', () => {
    it('should should have been called', (done) => {
      file.getDirectory().then(res => {
        expect(file.getDirectory).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('getFile', () => {
    it('should should have been called', (done) => {
      file.getFile().then(res => {
        expect(file.getFile).toHaveBeenCalled();
        done();
      });
    });
  });
});
