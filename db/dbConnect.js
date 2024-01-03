const mongoose = require('mongoose');

const connectDb = () => {
    return mongoose.connect(process.env.MONGO_URL);
    then( res => console.log("Dtabase successfully connected")) 
    .catch( err => console("Erroe connecting..."))
};

module.exports = {connectDb};