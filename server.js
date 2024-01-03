require('dotenv').config();

const express = require('express');
const app = express();
const allRoutes = require('./routes');
const {connectDb} = require('./db/dbConnect');


app.use(express.json());

connectDb();



app.use('/api', allRoutes)

app.listen(process.env.PORT, () => {
    console.log(`listening on port  ${process.env.PORT}`);
});