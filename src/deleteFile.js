import { rm } from 'node:fs/promises';

const deleteFile = async (patchToFile) => {
    await rm(patchToFile)
};

export default deleteFile;