var cron = require('node-cron');

// * * * * * * => Every Second 
// * * * * * => Every Minute 
// 0 0 1 * * => Beginning of every month at 12 AM 

const scheduledJobEverySecond = () => {
    console.log('------------------------------------------');
    console.log('Schedule Jobs - EverySecond');
    console.log('------------------------------------------');
}


cron.schedule('* * * * * *',scheduledJobEverySecond);


const scheduledJobEveryMinute = () => {
    console.log('------------------------------------------');
    console.log('Schedule Jobs - EveryMinute');
    console.log('------------------------------------------');
}


cron.schedule('* * * * *',scheduledJobEveryMinute);


const scheduledJobEveryMonth = () => {
    console.log('------------------------------------------');
    console.log('Schedule Jobs - EveryMonth');
    console.log('------------------------------------------');
}


cron.schedule('0 0 1 * *',scheduledJobEveryMonth);