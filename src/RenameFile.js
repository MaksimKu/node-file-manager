import fsPromises from 'node:fs/promises';
import { dirname, join } from 'node:path';

const renameFile = async (currentFilePath, newFileName) => {
    const newFilePath = join(dirname(currentFilePath), newFileName);
  
    const isNewFilePath = await fsPromises.access(currentFilePath, fsPromises.constants.F_OK)
      .then(() => true)
      .catch(() => false);
    if (isNewFilePath) {
        try{
      await fsPromises.rename(currentFilePath, newFilePath);
        } catch(err){
            console.log(err)
        }
    }
  
  };

  
  
  export default renameFile;