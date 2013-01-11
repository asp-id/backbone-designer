/**
 * File model test suite
 *
 * @author David Klassen <f0rk.tt@gmail.com> (c) 2013
 */

describe('File', function () {
  'use strict';

  var File;

  beforeEach(function () {
    var done = false;

    require(['models/File'], function (FileConstructor) {
      File = FileConstructor;

      done = true;
    });

    waitsFor(function () {
      return done;
    });
  });

  describe('constructor', function () {
    it('should have DIRECTORY constant', function () {
      expect(File.DIRECTORY).toBeDefined();
    });

    it('should have TEXT constant', function () {
      expect(File.TEXT).toBeDefined();
    });

    it('should require name', function () {
      expect(function () { return new File({ type: File.DIRECTORY }); }).toThrow();
    });

    it('should require parent for TEXT file type', function () {
      expect(function () { return new File({ name: 'test', type: File.TEXT }); }).toThrow();
    });

    it('should require parent to be instance of File', function () {
      expect(function () { return new File({ name: 'test', type: File.TEXT, parent: 'test'}); }).toThrow();
    });

    it('should require parent to be directory for TEXT file type', function () {
      expect(function () {
        var testFile = new File({ name: 'test' });

        return new File({ name: 'test', type: File.TEXT, parent: testFile });
      }).toThrow();
    });
  });

  describe('instance', function () {
    var name = 'test_dir';

    beforeEach(function () {
      this.instance = new File({
        name: name,
        type: File.DIRECTORY
      });
    });

    afterEach(function () {
      delete this.instance;
    });

    it('should have name', function () {
      expect(this.instance.get('name')).toEqual(name);
    });

    it('should have type', function () {
      expect(this.instance.get('type')).toEqual(File.DIRECTORY);
    });

    it('should have parent', function () {
      expect(this.instance.get('parent')).toBeDefined();
    });

    it('should have content', function () {
      var content = 'test content'
        , instance = new File({
          name: name,
          type: File.TEXT,
          parent: this.instance,
          content: content
        });

      expect(instance.get('content')).toEqual(content);
    });

    describe('isDir() method', function () {
      it('should be defined', function () {
        expect(this.instance.isDir).toBeDefined();
        expect(typeof this.instance.isDir).toEqual('function');
      });

      it('should return true if file is a directory', function () {
        expect(this.instance.isDir()).toBeTruthy();
      });

      it('should return false if file is not a directory', function () {
        var instance = new File({
          name: name,
          parent: this.instance
        });

        expect(instance.isDir()).toBeFalsy();
      });
    });

    describe('getPath() method', function () {
      it('should be defined', function () {
        expect(this.instance.getPath).toBeDefined();
        expect(typeof this.instance.getPath).toEqual('function');
      });

      it('should return the right path', function () {
        var newFileName = 'newFile'
          , newFile = new File({
            name: newFileName,
            parent: this.instance
          });

        expect(this.instance.getPath()).toEqual('/');
        expect(newFile.getPath()).toEqual('/' + name);
      });
    });
  });
});
