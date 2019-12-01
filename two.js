const fs = require('fs');
console.log('File Read About to Start');
const stream = fs.createReadStream('/Users/amit/Documents/AdvanceJava19/JSPDashBoardAuthData.mov',{ highWaterMark: 8192 });
stream.on('open',()=>{
    console.log('Stream Start');
});
stream.on('data',(chunk)=>{
    console.log(chunk);
})
stream.on('end',()=>{

});
stream.on('error',()=>{

});
stream.on('close',()=>{

});
// fs.readFile('/Users/amit/Documents/AdvanceJava19/JSPDashBoardAuthData.mov',(err,content)=>{
//     if(err){
//         console.log('Error is ',err);
//     }
//     else{
//         console.log('Content is ',content);
//     }

// });
console.log('File Read Prg Ends');