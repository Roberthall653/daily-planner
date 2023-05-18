var timeBlock = $('.time-block');
var hourBlock = $('.hour');
var hourDigit = [""];
var hour9 = $('#hour-9');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour1 = $('#hour-1');
var hour2 = $('#hour-2');
var hour3 = $('#hour-3');
var hour4 = $('#hour-4');
var hour5 = $('#hour-5');
var hour9array = [];
var hour10array = [];
var hour11array = [];
var hour12array = [];
var hour1array = [];
var hour2array = [];
var hour3array = [];
var hour4array = [];
var hour5array = [];
var saveBtn = $(".saveBtn");
var text = "";

$(function formatting() {
  saveBtn.click(function (event) {
    event.preventDefault();

    //saves the text in textarea to local storage.
    text = $(this).prev().val();
    if ($(this).parent().attr('id') === 'hour-9') {
      hour9array.pop();
      hour9array.push(text);
      localStorage.setItem('9AM', hour9array);
    } else if ($(this).parent().attr('id') === 'hour-10') {
      hour10array.pop();
      hour10array.push(text);
      localStorage.setItem('10AM', hour10array);
    }
    else if ($(this).parent().attr('id') === 'hour-11') {
      hour11array.pop();
      hour11array.push(text);
      localStorage.setItem('11AM', hour11array);
    }
    else if ($(this).parent().attr('id') === 'hour-12') {
      hour12array.pop();
      hour12array.push(text);
      localStorage.setItem('12AM', hour12array);
    }
    else if ($(this).parent().attr('id') === 'hour-1') {
      hour1array.pop();
      hour1array.push(text);
      localStorage.setItem('1PM', hour1array);
    }
    else if ($(this).parent().attr('id') === 'hour-2') {
      hour2array.pop();
      hour2array.push(text);
      localStorage.setItem('2PM', hour2array);
    }
    else if ($(this).parent().attr('id') === 'hour-3') {
      hour3array.pop();
      hour3array.push(text);
      localStorage.setItem('3PM', hour3array);
    }
    else if ($(this).parent().attr('id') === 'hour-4') {
      hour4array.pop();
      hour4array.push(text);
      localStorage.setItem('4PM', hour4array);
    }
    else if ($(this).parent().attr('id') === 'hour-5') {
      hour5array.pop();
      hour5array.push(text);
      localStorage.setItem('5PM', hour5array);
    }
  })
});




//used to compare dayjs time and the hour block time
var currentTime = parseInt(dayjs().format('H'));
hourBlock.each(function () {
  hourDigit = ($(this).data('hour'));

  if (currentTime == hourDigit) {
    $(this).next().addClass('present');
  }
  else if (currentTime > hourDigit) {
    $(this).next().addClass('past');
  }
  else {
    $(this).next().addClass('future');
  }
});

//grabs the saved text from local storage and displays it on page load
function textDisplay() {
  hour9.children('.description').text(
    localStorage.getItem('9AM', hour9array));
  hour10.children('.description').text(
    localStorage.getItem('10AM', hour10array));
  hour11.children('.description').text(
    localStorage.getItem('11AM', hour11array));
  hour12.children('.description').text(
    localStorage.getItem('12PM', hour12array));
  hour1.children('.description').text(
    localStorage.getItem('1PM', hour1array));
  hour2.children('.description').text(
    localStorage.getItem('2PM', hour2array));
  hour3.children('.description').text(
    localStorage.getItem('3PM', hour3array));
  hour4.children('.description').text(
    localStorage.getItem('4PM', hour4array));
  hour5.children('.description').text(
    localStorage.getItem('5PM', hour5array));

};
//code to display the current date in the header of the page.
var weekDay = dayjs().format('dddd');
$('#currentDay').text(weekDay);

textDisplay();
