//get express
const express = require('express');
//initialise express
const app = express();
const sendEmail = require('./mail');

const path = require('path');

//Data parsing
const { json, urlencoded } = express;
app.use(json());
app.use(urlencoded({ extended: true }));

app.post('/api/sendmail', (req, res) => {
  // expect to receive some data from client
  const { fullname, email, subject, message } = req.body;

  sendEmail(fullname, email, subject, message, (err, info) => {
    if (err) {
      res
        .status(500)
        .send({ message: 'Internal Error, Please try again later' });
    } else {
      res.send({
        message: 'Message successfully send!!!',
        info,
      });
    }
  });
});

if (process.env.NODE_ENV === 'production') {
  //serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  //Handle react routing, all requests to React App
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
