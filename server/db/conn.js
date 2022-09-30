const mongoose = require('mongoose')
const DB = process.env.DATABASE;
mongoose.connect(DB,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
       
       
    }).then(() => {
        console.log("connecton success")
    }).catch((err) => {
        console.log("no conn")
    })