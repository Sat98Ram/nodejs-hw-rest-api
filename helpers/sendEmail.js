const nodemailer = require("nodemailer");
require("dotenv").config();

const { GMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  service: "gmail",
  auth: {
    user: "irinkasatanovskaya@gmail.com",
    pass: GMAIL_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const mail = { ...data, from: "irinkasatanovskaya@gmail.com" };
  await transport.sendMail(mail);
  return true;
};

module.exports = sendEmail;
