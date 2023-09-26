import path from 'node:path';
import { readdir } from 'node:fs/promises';
import fs from 'node:fs/promises';


const showListTable = async (currentWorkDirectory) => {
  let files = (await readdir(currentWorkDirectory))
    .map(async file => {
      const stat = await fs.lstat(path.join(currentWorkDirectory, file));
      return { Name: file, Type: stat.isDirectory() ? 'directory' : 'file' };
  });
  files = await Promise.all(files);
  files.sort((a, b) => {
    if (a.Type === 'directory' && b.Type === 'file')
      return -1;
    if (b.Type === 'directory' && a.Type === 'file')
      return 1;
    return a.Name.localeCompare(b.Name);
  });

  console.table(files);
};

export default showListTable;