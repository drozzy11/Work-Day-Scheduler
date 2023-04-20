

  // the code will not run until the browser has finished rendering all the elements
  var settings = {};
  dayjs.locale(settings);
  // dayjs.locale will cause a wait until the dom is fully loaded 
  $(function () {
    // Get the current hour of the day using the dayjs library.
    var currentTime = dayjs().format('H');
  // The function below changes the color of each time block based on whether it's in the "past, present, or future" relative to the current hour.
    function hourlyColor() {
      $('.time-block').each(function() {
        var blockHour = parseInt(this.id);
        $(this).toggleClass('past', blockHour < currentTime);
        $(this).toggleClass('present', blockHour === currentTime);
        $(this).toggleClass('future', blockHour > currentTime);
      });
    }
  