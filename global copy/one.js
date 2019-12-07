console.log('I am Global');
process.on('exit',()=>{
    console.log("I will call when process is exit ");
})
console.log("Process Argv ",process.argv);
process.on('uncaughtException',(err, origin)=>{
    const fs = require("fs");
    fs.appendFileSync("error.log",err);
    console.log("UnCaught Exception Called...");
    //fs.writeFileSync("error.log",err);
   // console.log("Something Went Wrong Error is :::",err);
   // console.log("Origin is ########### ",origin)
})
a++;
console.log(__filename);
console.log(__dirname);
console.log('Current Process is ',process.cwd());
