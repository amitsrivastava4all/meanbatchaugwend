const fs = require("fs");
console.log("One");
var content = fs.readFileSync(__filename);
console.log("After Read ",content);
 content = fs.readFileSync(__filename);
console.log("After Read2 "+content);
// fs.readFile(__filename,(err,content)=>{
//     if(err){
//         console.log('Error During Read ',err);
//     }
//     else{
//         console.log('******************Read '+content);
//     }

// });
// fs.readFile(__filename,(err,content)=>{
//     if(err){
//         console.log('Error During Read ',err);
//     }
//     else{
//         console.log('###################Read '+content);
//     }

// });
console.log("Two");