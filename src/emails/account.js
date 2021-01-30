const sgMail = require("@sendgrid/mail");

const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  //to: "avok.vulture@gmail.com",
  to: "kovarthanan07@gmail.com",
  from: "kovarthanan07@gmail.com",
  subject: "Sample ... ",
  text: "This is a sample mail ",
});
