require('dotenv').config();
const nodemailer = require('nodemailer');

//auth config object
const auth = {
  user: process.env.MAIL_USERNAME,
  pass: process.env.PASSWORD,
};

//create transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: auth,
});

const sendEmail = (fullname, email, subject, message, callBack) => {
  const htmlEmail = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<style>
h3{
font-size: 14px;
color: #800080;
}
p{
white-space: pre-wrap;
}
span{
font-weight: bold;
}
ul {
list-style-type: none;
}
</style>
</head>
<body>
<p>You have a new contact request:</p>
<h3>Contact Details</h3>
<ul>
<li><span>Full Name:</span> ${fullname}</li>
<li><span>Email:</span> ${email}</li>
</ul>
<p>${message}</p>
</body>
<html/>
`;

  // send mail with defined transport object
  let mailOptions = {
    from: `${process.env.SENDER_NAME} 👻 <${email}>`,
    to: `${process.env.RECEIVER_NAME} <${process.env.MAIL_USERNAME}>`,
    subject, // Subject line
    text: message, // plain text body
    html: htmlEmail,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      callBack(error, null);
    } else {
      console.log(info);
      callBack(null, info);
    }
    transporter.close();
  });
};

module.exports = sendEmail;
