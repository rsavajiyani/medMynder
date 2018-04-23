// const schedule = require("node-schedule");
const accountSid = "ACd81ab3ef3e31190aca6c237abc43934b";
const authToken = "46299682eb41071496b5cdea9e169315";
// const twilioNumber = "+16023627417";
const client = require("twilio")(accountSid, authToken);
// const twilioFunction = require("./twilio.js");

module.exports = {
    sendText: function(userNumber, twilioNumber, messageBody) {
      console.log("sendtext function hit");
      client.messages
        .create({
          to: userNumber,
          from: twilioNumber,
          body: messageBody
        })
        .then(message => console.log("message sent", message.sid));
    },
}