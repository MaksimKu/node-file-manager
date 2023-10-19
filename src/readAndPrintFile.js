import { createReadStream, read, lstat } from 'fs';
import { dirname, join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';

const readAndPrintFile = async (fileToReadPath) => {

  const pathParseResults = parse(fileToReadPath);
  if (!pathParseResults.root || !pathParseResults.ext) {
    throw new Error();
  }

  const reader = createReadStream(fileToReadPath);
  reader.on('data', (chunk) => { process.stdout.write(chunk.toString()); });
};

export default readAndPrintFile;