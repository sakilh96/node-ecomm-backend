const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
require('./config/db');


app.use(cors());
app.use(express.json());
//routes
const userRouter = require('./routes/userRoute');
app.use('/api', userRouter);



const PORT = 3200;
// const HOST = process.env.HOST || '192.168.112.162';
const HOST = process.env.HOST || '0.0.0.0';

// app.listen(port,'0.0.0.0',()=>{
//   console.log(`node server listening on ${port}`);
// })

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});