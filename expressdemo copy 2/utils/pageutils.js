module.exports = {
    getFullPath(filePath){
        const path = require('path');
        const root = path.normalize(__dirname+"/..");
        return path.join(root,'/'+filePath);
    }
}