// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// *GLOBAL VARIABLES*

var timeDisplayEl = $('#currentDay');
timeDisplayEl.text(moment().format("dddd MMMM Do"));

// var tableEl = $('.table');




var allTableDescendants = $('.table').find('*');
var tdHourArray = [];
var hourTest = moment().hour();


for (var i = 0; i < allTableDescendants.length; i++) {
    if ($(allTableDescendants[i]).hasClass('text-field')) {
        tdHourArray.push(allTableDescendants[i]);
    }
}


for (var i = 0; i < tdHourArray.length; i++) {
    if (tdHourArray[i].dataset.time < hourTest) {
        $(tdHourArray[i]).addClass('past');
    }
}

console.log(tdHourArray);