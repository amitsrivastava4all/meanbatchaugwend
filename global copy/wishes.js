let eventName = process.argv[2];
let rec = process.argv[3];
let sender = process.argv[4];

var CronJob = require('cron').CronJob;
searchEvent(eventName);
function searchEvent(eventName){
    var events = {"diwali":"* * * * * *","holi":"* * 5 21 3 0"};
    let dateTime = events[eventName];
    console.log("Inside Search Event ", dateTime);
    new CronJob(dateTime, function() {
        console.log('You will see this message every second');
        wish(eventName,rec,sender);
      },null, true, 'America/Los_Angeles');
   
}
function wish(eventName, rec,sender){
    console.log(eventName+" Rec By "+rec+" Send "+sender);
}