const nodemailer = require("nodemailer");
const smtp_config = require("../config/smtp");

async function main(output) {
  let transporter = nodemailer.createTransport({
    host: smtp_config.HOST,
    port: smtp_config.PORT,
    auth: {
      user: smtp_config.USER,
      pass: smtp_config.PASS,
    },
  });

  let info = await transporter.sendMail({
    from: "Nodemailer app",
    to: "insert your email...",
    subject: "Email from nodemailer app",
    text: "Hello world?",
    html: output || "",
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

module.exports = {
  main
}