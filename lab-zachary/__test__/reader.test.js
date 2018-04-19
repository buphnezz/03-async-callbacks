'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {
  describe('textFileReader.readFirstNCharactersAsync', () => {
    test('textFileReader.readFirstNCharactersAsync should return error if no file path exists', () => {
      expect(textFileReader.readFirstNCharactersAsync.toEqual('no path found'));
    });
  })
});