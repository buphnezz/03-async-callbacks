'use strict';

const fs = require('fs');
const logger = require('./logger');
// Do I need to add this const txtFileReader = require('../main')? When I exclude it, I get node main.js error saying cannot find path to kingArthurPath, sleepHollowPath and frankensteinPath.
// const txtFileReader = require('../main');

const txtFileReader = module.exports = [kingArthurPath, sleepHollowPath, frankensteinPath];

txtFileReader.readFirstNCharactersAsync = (filePath, characters, callback) => {
  logger.log(logger.VERBOSE, `Reading ${filePath}`);

  return fs.readFile(
    filePath,
    (error, fileBuffer) => {
      if (error) {
        throw error;
      }
      return callback(fileBuffer.toString('utf8', 0, characters));
    },
  );
};
 



