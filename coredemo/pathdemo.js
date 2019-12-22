console.log(__filename);
const fs = require('fs');
const path = require('path');
const parent = path.normalize(__dirname+"/..");
console.log('Parent ',parent);
console.log('Current ',__dirname);
const fullPath = path.join(parent,'calc/call.js');
console.log('Full Path ',fullPath);
fs.readFile(fullPath,(err,content)=>{
    console.log(content);
})
console.log('File Name is ',path.basename(fullPath));
console.log('Dir ',path.dirname(fullPath));
console.log('Object is ',path.parse(fullPath));