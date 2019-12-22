const os = require('os');
console.log(os.arch());
console.log(os.platform());
// const { exec, spawn } = require('child_process');
// exec('my.bat', (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(stdout);
// });
const url = require('url');
var x = "https://www.flipkart.com/search?q=mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off";
const obj = url.parse(x,true);
console.log(obj);
