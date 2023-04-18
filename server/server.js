const express = require('express');
const bodyParser =  require('body-parser');
const path = require ('path');

const cors = require('cors');
const dotenv =  require ('dotenv');
const multer= require ('multer');
// const helmet =  require('helmet');
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import userRoutes from '.routes/users.js';
import postRoutes from '.routes/posts.js';

import authMiddleware from './middleware/auth.js';
const authController = require('./controllers/authController.js');
import postController from './controllers/postsController.js';
import{ User} from './models/user.js';
import { Post } from './models/posts.js';
import { users, posts } from './data/index.js';

/* CONFIGURATIONS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
// app.use(morgan('common'));
// app.use(bodyParser.json({limit: '30mb', extended: true}));
// app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, '../src')));

// app.get('/posts', (req,res) => {
//    return res.status(200).sendFile(path.join(__dirname, '../src/index.html'))
//    // res.send('Hello!!');
// });

const PORT = 3000;

/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function(req, res, cb){
        cb(null, 'src/assets');
    },
    filename: function(req,res,cb){
        cb(null, file.originalname)
    }
});

const upload = multer({ storage });

/* ROUTES */
app.post('/auth/register', upload.single('picture'), authController.register);
app.post('/posts', authMiddleware.verifyToken, upload.single('picture'), postController.createPost);

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

/* MONGOOSE SETUP */
const DBPORT = process.env.PORT || 6001;
mongoose.connect('mongodb+srv://rathnac:Code$mith23@cluster0.2pijbl3.mongodb.net/?retryWrites=true&w=majority', {
    useNewURLParser: true,
    useUnifiedTopology: true,
    dbName: 'locations'
})
.then(() => {app.listen(DBPORT, () => console.log(`Connected to Mongo DB on port ${DBPORT}`))

/*ADD DATA ONE TIME */
User.insertMany(users);
Post.insertMany(posts);

})
.catch((error) => console.log(`${error} did not connect`));

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/* START SERVER */
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
  module.exports = app;
