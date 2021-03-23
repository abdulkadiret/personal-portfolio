//get express
const express = require('express');
//initialise express
const app = express();

const path = require('path');

//Data parsing
const { json, urlencoded } = express;
app.use(json());
app.use(urlencoded({ extended: true }));

app.post('/api/sendmail', (req, res) => {
  console.log(req.body);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
