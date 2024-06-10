const mongoose = require('mongoose');

mongoose.connect(process.env.DB).then((res)=>{
    console.log('database connection established');
}).catch((err)=>{
    console.log('database connection error',err);
})


