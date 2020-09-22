function sendMessage(body){

    //chatwork
    var token = "************";
    
    //chatwork room
    var room_id = "*********";
    
    var params = {
      headers : {"X-ChatWorkToken" : token},
      method : "post",
      payload : {
        body : body
      }
    };
    var url = "https://api.chatwork.com/v2/rooms/" + room_id + "/messages";
    UrlFetchApp.fetch(url, params);
  }
  
  // 祝日か判定
  function isHoliday(today) {
    var week = Utilities.formatDate(today, 'Asia/Tipei', 'u');
    if (week == 6 || week == 7) { // 土日判定
      return true;
    }
  
    var calendarId = "zh.taiwan#holiday@group.v.calendar.google.com";
    var holidays = CalendarApp.getCalendarById(calendarId).getEventsForDay(today); // 休日の場合、台灣の祝日カレンダーにイベントが登録されているはず
    return holidays.length > 0;
  }