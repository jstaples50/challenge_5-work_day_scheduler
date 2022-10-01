// WHEN I refresh the page
// THEN the saved events persist

// *GLOBAL VARIABLES*

var timeDisplayEl = $('#currentDay');
timeDisplayEl.text(moment().format("dddd MMMM Do"));


var tdHourArray = $('.text-field');
var allTextAreaEls = $('textarea');

var currentHour = moment().hour();

var allButtonEls = $('i');
allButtonEls.on('click', setTextAreaStorage);




// *TESTS*


// *FUNCTIONS AND EXECUTION*

// Finds associated text area to button

function findCorrespondingTextArea(saveBtnId) {
    for (var i = 0; i < allTextAreaEls.length; i++) {
        if ($(allTextAreaEls[i]).hasClass(saveBtnId)) {
            return $(allTextAreaEls[i]).val()
        } 
    };
}

// Sets local storage of text area 

function setTextAreaStorage(event) {
    localStorage.setItem(`${event.target.id}`, findCorrespondingTextArea(event.target.id));
}

// Checks if the hour is past, present, or future and dynamically updates


for (var i = 0; i < tdHourArray.length; i++) {
    if (tdHourArray[i].dataset.time < currentHour) {
        $(tdHourArray[i]).addClass('past');
    } else if (tdHourArray[i].dataset.time == currentHour) {
        $(tdHourArray[i]).addClass('present');
    } else {
        $(tdHourArray[i]).addClass('future');
    }
}








