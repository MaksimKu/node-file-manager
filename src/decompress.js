import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async (zipPath, fileToDecompressPath) => {

  const brotliDecompress = createBrotliDecompress();
  const source = createReadStream(zipPath);
  const destination = createWriteStream(fileToDecompressPath);
  await pipeline(source, brotliDecompress, destination);
};

export default decompress;