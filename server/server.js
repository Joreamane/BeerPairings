const express = require('express')
require('./config/mongoose.config')
require('dotenv').config();
const app = express();
const cors = require('cors')
const port = 8000;
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}))
require('./routes/user.routes')(app)

app.listen(port, () => console.log(`Listening on port: ${port}`));