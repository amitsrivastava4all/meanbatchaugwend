const http = require("http");

function readStaticFile(response,url){
    const fs = require('fs');
    const path = require('path');
    const fullPath = path.join(__dirname,'public/'+url);
    const stream = fs.createReadStream(fullPath);
    stream.pipe(response);
}
function handleRequestResponse(request, response){
    console.log('Request Here');
   console.log(request.url);
   if(request.url=='/' || request.url=='/index.html'){
   readStaticFile(response,'/index.html');
   }
   else
   if(){

   }
   
   else{
       response.write('Invalid URL ');
       response.end();
   }
   //response.write('Hello User');
   //response.end();
}
const server = http.createServer(handleRequestResponse);
console.log('Server Created...');
server.listen(1234,()=>{
    console.log('Server Up and Running');
})