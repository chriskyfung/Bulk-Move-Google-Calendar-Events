function doGet(e) {
  //var now = new Date();
  //var days30BeforeNow = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));
  var enddate = new Date("Aug 31, 2017 00:00:00");
  var startdate = new Date(enddate.getTime() - (31 * 24 * 60 * 60 * 1000));
  if (startdate > enddate) {
    var tempdate = startdate;
    startdate = enddate;
    enddate = tempdate;
    delete tempdate;
  }
  var output = Move1To2(startdate, enddate);
  return ContentService.createTextOutput(output);
}

function Move1To2(startdate, enddate) {
  var oldCalId = Cal_Id.Calendar1;
  var newCalId = Cal_Id.Calendar2;
  var kword = "http://twitter.com/";
  return moveEvents(oldCalId, newCalId, kword);
}

function Move3To4(startdate, enddate) {
  var oldCalId = Cal_Id.Calendar3;
  var newCalId = Cal_Id.Calendar4;
  var kword = "(Posted on Facebook)";
  return moveEvents(oldCalId, newCalId, kword);
}

//function MovetoCal(oldCalId, newCalId, keyword) {
//  var now = new Date();
//  var days30BeforeNow = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));
//  var events = CalendarApp.getCalendarById(oldCalId).getEvents(days30BeforeNow, now, {search: keyword} );
//   Logger.log('Number of events: ' + events.length);
//  for(i in events) {
//    var title = events[i].getTitle();
//       var startTime = events[i].getStartTime();
//       var endTime = events[i].getEndTime();
//        // move events to another calendar
//      CalendarApp.getCalendarById(newCalId).createEvent(title, startTime, endTime);
//      events[i].deleteEvent();
//  }
//}

function MovetoCal(oldCalId, newCalId, keyword, startdate, enddate) {
  var events = CalendarApp.getCalendarById(oldCalId).getEvents(startdate, enddate, {search: keyword} );
   Logger.log('Number of events: ' + events.length);
  for(i in events) {
    var title = events[i].getTitle();
       var startTime = events[i].getStartTime();
       var endTime = events[i].getEndTime();
        // move events to another calendar
      CalendarApp.getCalendarById(newCalId).createEvent(title, startTime, endTime);
      events[i].deleteEvent();
  }
}

function isTweet(string) {
  var substring = "http://twitter.com" 
  if (string.indexOf(substring) > -1) {
    return true;
  } else {
    return false;
  }
}

function CleanCal() {
  var now = new Date();
  var days30BeforeNow = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000));
  var events = CalendarApp.getCalendarById('u8abaiqftcqh8d0mk5iueh89ig@group.calendar.google.com').getEvents(days30BeforeNow, now);
   Logger.log('Number of events: ' + events.length);
  for(i in events) {
      events[i].deleteEvent();
  }
}