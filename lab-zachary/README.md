In your README.md describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each paramiter (data-type and limitations), and it's behavior (for both valid and invalued use). Feel free to write any additional information in your README.md.

main.js: 

printTxt() has an airty of 1 and is expecting the txt parameter, txt is the text of each .txt file and printTxt() displays that text.
readTxtFileArrayAsync() has an airty of 3 and is expecting the fileArray, currentIndex, callback parameters.  fileArray = all of the .txt files I have, all the .txt files I have are stored in an array and currentIndex parameter is essentially the location of each of .txt files within the fileArray, callback will 

reader.js:

readFirstNCharactersAsync() ----has an airty of 3, it's expecting the following parameters: filePath, characters, callback.  filePath = the actual file, characters = the number of characters that will be returned (only returning 255 characters for the sake of time, even though the books were longer than 255 characters), callback = this is the callback that gets moved back into the queue

fs.readfile() --- has an airty of 2, it's expecting the filePath and callback parameters.  fs.readfile() reads the entire txt file and returns the txt file as the fileBuffer variable.

callback() at the bottom of reader.js --- has an airty of 3 and it converts the fileBuffer variable into a string, encoding that string as utf-8 and starts at the first character of the file which is index 0. 



