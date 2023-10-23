import path from 'node:path';
import fsPromises from 'node:fs/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { dirname, join } from 'node:path';

const copyFile = async (filePath, directoryPath) => {
  const pathParseResults = path.parse(filePath);
  if (!pathParseResults.ext) {
    throw new Error();
  }
  const directoryPathParseResults = path.parse(directoryPath);
  if (directoryPathParseResults.ext) {
    throw new Error();
  }

  const fileName = pathParseResults.base;
  const newFilePath = join(directoryPath, fileName);

  const isNewFilePath = await fsPromises.access(newFilePath, fsPromises.constants.F_OK)
    .then(() => true)
    .catch(() => false);
  if (isNewFilePath) {
    throw new Error();
  }

  const isFilePath = await fsPromises.access(filePath, fsPromises.constants.F_OK)
    .then(() => true)
    .catch(() => false);
  if (!isFilePath) {
    throw new Error();
  }


  const readable = createReadStream(filePath);
  const writable = createWriteStream(newFilePath);
  await pipeline(readable, writable);
};

export default copyFile;