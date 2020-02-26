var ts = Date.now();

var myDate="15-12-2012";
myDate = myDate.split("-");
var newDate = myDate[1] + "/" + myDate[0] + "/" + myDate[2];

var newTs = new Date(newDate).getTime();

var milliOld = ts - newTs;
var monthsOld = milliOld / 365.25 / 24 / 60 / 60 / 1000 * 12;

var mO = Math.round((monthsOld + Number.EPSILON) * 100) / 100;

console.log(mO);