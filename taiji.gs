function teiji() {
    deleteTrigger('teiji');
    var currentTime = new Date();
    console.log( "今日：", currentTime );
    var holidayFlg = isHoliday(currentTime);
    
    // 土日休フラグの検証
    if (holidayFlg) {
      return false;
    }
    
    //明日は休みかチェック
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    console.log( "明日：", tomorrow );
    var tomorrowHolidayFlg = isHoliday(tomorrow);
    if (tomorrowHolidayFlg) {
      var retBody = "[info][title]明天是假日[/title]下班啦~下班啦~(gogo)[/info]";
      sendMessage(retBody);
      return ContentService.createTextOutput("Hello World");
    }else{
      var retBody = "[info][title]下班時間到了[/title]下班啦~下班啦~(gogo)[/info]";
      sendMessage(retBody);
      return ContentService.createTextOutput("Hello World");
    }
  }