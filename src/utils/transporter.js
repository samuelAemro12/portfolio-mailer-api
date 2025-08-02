const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransporter({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

module.exports = transporter;