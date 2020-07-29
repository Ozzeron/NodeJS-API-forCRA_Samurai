const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');
const profilesRoute = require('./routes/profiles');
const authRouter = require('./routes/auth');

app.use('/posts', postsRoute);
app.use('/users', usersRoute);
app.use('/profiles', profilesRoute);
app.use('/apidoc', express.static('apidoc')); // API doc url https://react-node-js-learning.herokuapp.com/apidoc


app.use('/auth', authRouter);


//db connection
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log('connected to DB!')
    });

//ROUTES
app.get('/', (req, res) => {
    res.header("access-control-allow-origin", "http://localhost:3000");
    res.header("access-control-allow-headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send('we are on \'\/\' ');
});


const PORT = process.env.PORT || 80;


// Listening the server
app.listen(PORT, () => {
    console.log('API has started')
});

//CORS configuring