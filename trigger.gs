function Trigger1() {
    var triggerDay = new Date();
    triggerDay.setHours(18);
    triggerDay.setMinutes(00);
    ScriptApp.newTrigger("teiji").timeBased().at(triggerDay).create();
  }
  
  function deleteTrigger(tesu) {
    var triggers = ScriptApp.getProjectTriggers();
    for(var i=0; i < triggers.length; i++) {
      if (triggers[i].getHandlerFunction() == tesu) {
        ScriptApp.deleteTrigger(triggers[i]);
      }
    }
  }