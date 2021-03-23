require('dotenv').config();
//get express
const express = require('express');
//initialise express
const app = express();
const nodemailer = require('nodemailer');

const path = require('path');

//Data parsing
const { json, urlencoded } = express;
app.use(json());
app.use(urlencoded({ extended: true }));

app.post('/api/sendmail', (req, res) => {
  const { fullname, email, subject, message } = req.body;

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

  //auth config object
  const auth = {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI,
    refreshToken: process.env.REFRESH_TOKEN,
  };

  //create transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: auth,
  });

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      res.status(500).send({
        success: false,
        message: 'Internal error, Please try again later',
      });
    } else {
      res.send({
        success: true,
        message: 'Message successfully send!!!',
      });
    }
  });
  transporter.close();
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
