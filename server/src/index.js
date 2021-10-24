const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path');
const cors = require('cors')

require('./models/Post')
require('./models/Comment')

const dotenv = require('dotenv')

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const config = require('./config')

const routes = require('./routes')

const app = express();

mongoose.connect(
  config.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) {
      console.log(err)
    }
  }
)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', function () {
  console.log('Connected successfully');
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('*', (req, res) =>
  res.sendFile('../../client/build/index.html'))
app.use('/api', routes)

app.listen(config.port, () => console.log(`App is ready on port ${config.port}`))
