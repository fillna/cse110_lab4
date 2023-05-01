function printTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

const intervalID = setInterval(printTime, 1000);

// setTimeout so that it terminates after 1 minute.
// setTimeout(function() {
//     clearInterval(intervalID);
// }, 60 * 1000);
