//console.log(process.argv);
sendBirthDayWishes(process.argv[2],process.argv[3],process.argv[4]);
function sendBirthDayWishes(msg, rec, sender){
    // Mail Send
    console.log("Dear "+msg+" "+rec+"  From "+sender);
}