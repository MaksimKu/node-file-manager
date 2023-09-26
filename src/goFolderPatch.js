import patch from 'node:path';

const goFolderPatch = (currentWorkDirectory, newFolderPatch) => {
    let folderPatch;
    if (patch.isAbsolute(newFolderPatch)) {
        folderPatch = newFolderPatch;
    } else {
        folderPatch = patch.resolve(currentWorkDirectory, newFolderPatch);
    };
    process.chdir(folderPatch);
    return process.cwd()
}

export default goFolderPatch;