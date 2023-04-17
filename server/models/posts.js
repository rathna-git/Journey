const mongoose = require('mongoose');

/* MONGOOSE SETUP */
const MONGO_URI = 'mongodb+srv://rathnac:Code$mith23@cluster0.2pijbl3.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, {
    useNewURLParse: true,
    useUnifiedTopology: true,
    dbName: 'locations'
})
.then(() => console.log('Connected to Mongo DB.'))
.catch((error) => console.log(`${error} did not connect`));

//ADD SCHEMAS HERE