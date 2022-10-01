const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.DBURL;

mongoose.connect(dbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('Database Connected Successfully')
}).catch((err) => {
    console.log(err);
})
