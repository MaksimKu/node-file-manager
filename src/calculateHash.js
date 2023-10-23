import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
import fsPromises from 'node:fs/promises';

const calculateHash = async (fileToCalculateHashForPath) => {

  const isfileToCalculateHashForPath = await fsPromises.access(fileToCalculateHashForPath, fsPromises.constants.F_OK)
    .then(() => true)
    .catch(() => false);
  if (!isfileToCalculateHashForPath) {
    throw new Error();
  }
  const { createHash } = await import('node:crypto');
  const hash = createHash('sha256');
  const input = createReadStream(fileToCalculateHashForPath);
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

export default calculateHash;