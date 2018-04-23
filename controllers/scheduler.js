// const schedule = require("node-schedule");
// const accountSid = "ACd81ab3ef3e31190aca6c237abc43934b";
// const authToken = "46299682eb41071496b5cdea9e169315";
// const client = require("twilio")(accountSid, authToken);
const twilioNumber = "+16023627417";
const twilioFunction = require("./twilio.js")
module.exports={
    scheduler : function(frequency, medicine, instructions, userName, userNumber) {
    console.log("scheduler function hit");
    const notifications = [
      {
        hour: 8,
        min: 0
      },
      {
        hour: 14,
        min: 0
      },
      {
        hour: 20,
        min: 0
      }
    ];
    // var hour = notifications[0].hour;
    // var min = notifications[0].min;

    for (let i = 0; i < frequency; i++) {
      let hour, min;
      if (i == 0) {
        hour = notifications[0].hour;
        min = notifications[0].min;
      }
      if (i == 2) {
        hour = notifications[1].hour;
        min = notifications[1].min;
      }
      if (i == 1) {
        hour = notifications[2].hour;
        min = notifications[2].min;
      }
      twilioFunction.twilio(hour,min,userNumber,userName,medicine,instructions,twilioNumber);
    }
  }
}