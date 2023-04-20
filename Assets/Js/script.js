

  // the code will not run until the browser has finished rendering all the elements
  var settings = {};
  dayjs.locale(settings);
  // dayjs.locale will cause a wait until the dom is fully loaded 
  $(function () {
    // Get the current hour of the day using the dayjs library.
    var currentHour = dayjs().format('H');
  // The function below changes the color of each time block based on whether it's in the "past, present, or future" relative to the current hour.
    function hourlyColor() {
      $('.time-block').each(function() {
  // parseInt turns string into interger
        var hourBox = parseInt(this.id);
        $(this).toggleClass('past', hourBox < currentHour);
        $(this).toggleClass('present', hourBox === currentHour);
        $(this).toggleClass('future', hourBox > currentHour);
      });
    }
  
 // The function below will update the color of each time block based on whether it's in the past(grey), present(red), or future(green) relative to the current time. 
  function updateColor() {
    $('.time-block').each(function() {
      var hourBox = parseInt(this.id);
      if (hourBox == currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else if (hourBox < currentHour) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }
 // The  function below will save the user's input in a textarea to localStorage - only when the corresponding save button has been clicked.
 function textEntry() {
  $('.saveBtn').on('click', function() {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });
}
// This will get the user input from the localStorage and set textarea values for each time block.
$('.time-block').each(function() {
  var key = $(this).attr('id');
  var value = localStorage.getItem(key);
  $(this).children('.description').val(value);
});

//this function will be placed within a setinterval and will update my time and date in my header 
function updateTime() {
  var dateElement = $('#date');
  var timeElement = $('#time');
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  var currentTime = dayjs().format('hh:mm:ss A');
  dateElement.text(currentDate);
  timeElement.text(currentTime);
}
//functions to set up the page.
hourlyColor();
textEntry();                
updateColor();
// this will update the time every second 
setInterval(updateTime, 1000);
});
