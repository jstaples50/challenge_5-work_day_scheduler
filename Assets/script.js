// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// *GLOBAL VARIABLES*

var timeDisplayEl = $('#currentDay');
timeDisplayEl.text(moment().format("dddd MMMM Do"));


var tdHourArray = $('.text-field');

var hourTest = moment().hour();

var allButtonEls = $('i');


// *FUNCTIONS AND EXECUTION*


// Checks if the hour is past, present, or future and dynamically updates


for (var i = 0; i < tdHourArray.length; i++) {
    if (tdHourArray[i].dataset.time < hourTest) {
        $(tdHourArray[i]).addClass('past');
    } else if (tdHourArray[i].dataset.time == hourTest) {
        $(tdHourArray[i]).addClass('present');
    } else {
        $(tdHourArray[i]).addClass('future');
    }
}


