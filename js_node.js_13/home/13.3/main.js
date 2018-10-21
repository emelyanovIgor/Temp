/*
3*. Создать package.json, установить туда nodemailer и попробовать отправить самому себе письмо
*/
const nodemailer = require('../../node_modules/nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'emelyanov.igor@gmail.com',
    pass: 'myPass'
  }
});

const mailOptions = {
  from: 'emelyanov.igor@gmail.com',
  to: 'emelyanov.igor@gmail.com',
  subject: 'Sending a letter using Nodemailer',
  text: 'Hi to me!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});