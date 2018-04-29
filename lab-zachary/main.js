'use strict';

const logger = require('../lab-zachary/lib/logger');
const txtFileReader = require('../lab-zachary/lib/reader');

const kingArthurPath = `${__dirname}/../lab-zachary/data/KingArthur.txt`;
const sleepHollowPath = `${__dirname}/../lab-zachary/data/SleepHollow.txt`;
const frankensteinPath = `${__dirname}/../lab-zachary/data/Frankenstein.txt`;

const printTxt = (txt) => {
  console.log(txt);
  console.log('------------------------------------------');
};
const CHARACTERS = 255;

const files = [kingArthurPath, sleepHollowPath, frankensteinPath];

// callback will execute once ALL async operations have finished
const readTxtFileArrayAsync = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback;
  }
  const currentTxtFilePath = fileArray[currentIndex];
  try {
    return txtFileReader.readFirstNCharactersAsync(currentTxtFilePath, CHARACTERS, (file) => {
      printTxt(file);
      readTxtFileArrayAsync(fileArray, currentIndex + 1, callback);
    });
  } catch (error) {
    logger.log(logger.ERROR, error);
  }
  return undefined;
};

readTxtFileArrayAsync(files, 0, () => logger.log(logger.INFO, 'All the txt files have been displayed'));
