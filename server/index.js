//install and require here
const dotenv = require('dotenv')
const express = require('express')
const cors=require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))//false or true doesnot matter its work
app.use(require('./router/auth'))
app.use(cookieParser())

//MIDDWRE HERE

//DOT ENV FILE REQUIRE AND USE HERE
dotenv.config({path:'./config.env'})

const PORT = process.env.PORT;
//CONNCET TO DATABASE HERE
require('./db/conn')
const User = require('./model/modelUsershema')

app.listen(PORT, () => {
    console.log(`server is starting at ${PORT}`)
})