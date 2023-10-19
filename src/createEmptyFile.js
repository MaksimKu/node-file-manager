import fs from 'node:fs/promises';
import path from 'node:path';

const createEmptyFile = async (currentWorkDirectory, newFileName) => {

  const pathParseResults = path.parse(newFileName);
  if (!pathParseResults.ext) {
    throw new Error();
  }
  const newFilePath = path.join(currentWorkDirectory, newFileName);
  await fs.writeFile(newFilePath, '', { flag: 'wx' });
};

export default createEmptyFile;