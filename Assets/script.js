// WHEN I refresh the page
// THEN the saved events persist

// *GLOBAL VARIABLES*

var timeDisplayEl = $('#currentDay');
timeDisplayEl.text(moment().format("dddd MMMM Do"));


var hourArray = $('.text-field');
var allTextAreaEls = $('textarea');

var currentHour = moment().hour();

var allButtonEls = $('i');
allButtonEls.on('click', setTextAreaStorage);

var timesArray = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']

var localStorageIterator = 9


// *TESTS*


// *FUNCTIONS*

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


function checkStateOfHour() {
    for (var i = 0; i < hourArray.length; i++) {
        if (hourArray[i].dataset.time < currentHour) {
            $(hourArray[i]).addClass('past');
        } else if (hourArray[i].dataset.time == currentHour) {
            $(hourArray[i]).addClass('present');
        } else {
            $(hourArray[i]).addClass('future');
        }
    }
}

// Gets the local storage and sets it to the text area

function getTextAreaStorage() {
    for (var i = 0; i < allTextAreaEls.length; i++) {
        $(`#${localStorageIterator}`).val(localStorage.getItem(`${timesArray[i]}`))
        localStorageIterator++;
    }
}

// *EXECUTION*

checkStateOfHour();
getTextAreaStorage();








