import path from "node:path"

const getPathUp = (oldPath) => {
    return path.resolve(oldPath, '../')
}

export default getPathUp