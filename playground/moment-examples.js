var moment = require('moment');

console.log(moment().format());

// unix timestamps
// January 1st, 1970 @ 12:00am -> 0
// January 1st, 1970 @ 12:01am -> 60
// December 31st, 1959 @ 11:59pm -> -60

var now = moment();
console.log('Current timestamp', now.unix());

var timestamp = 1488301805;
var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format());
// Current moment 2017-02-28T12:10:05-05:00
console.log('Current moment', currentMoment.format("MMM"));
// Current moment Feb
console.log('Current moment', currentMoment.format("MMM D, YY"));
// Current moment Feb 28, 17
console.log('Current moment', currentMoment.format("MMM D, YY @ h:mm a"));
// Current moment Feb 28, 17 @ 12:10 pm
console.log('Current moment', currentMoment.format("MMMM Do, YYYY @ h:mm A"));
// Current moment February 28th, 2017 @ 12:10 PM
