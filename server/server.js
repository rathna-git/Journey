const express = require('express');
const bodyParser =  require('body-parser');
const path = require ('path');

// const cors = require('cors');
// const dotenv =  require ('dotenv');
// const multer= require ('multer');
// const helmet =  require('helmet');
// import { fileURLToPath } from 'url';

/* CONFIGURATIONS */
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config();
const app = express();
app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
// app.use(morgan('common'));
// app.use(bodyParser.json({limit: '30mb', extended: true}));
// app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
// app.use(cors());
//app.use(express.static(path.join(__dirname, '../src')));

app.get('/posts', (req,res) => {
   //return res.status(200).sendFile(path.join(__dirname, '../src/index.html'))
    res.send('Hello!!');
});

const PORT = 3000;

/* FILE STORAGE */
//const storage = multer.diskStorage({
//     destination: function(req, res, cb){
//         cb(null, 'src/assets');
//     },
//     filename: function(req,res,cb){
//         cb(null, file.originalname)
//     }
// });

//const upload = multer({ storage });

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

/* START SERVER */
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
  module.exports = app;
