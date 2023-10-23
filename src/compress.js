import { createBrotliCompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async (fileToCompressPath, zipPath) => {

  const brotliCompress = createBrotliCompress();
  const source = createReadStream(fileToCompressPath);
  const destination = createWriteStream(zipPath);
  await pipeline(source, brotliCompress, destination);
}

export default compress;