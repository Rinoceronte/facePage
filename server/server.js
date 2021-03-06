'use strict';
//import env from './env';
import express from 'express';
import handlebars from 'express-handlebars';
import http from 'http';
import Routes from './routes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import config from '../webpack.config';

if(process.env.ENVIRONMENT === 'dev'){
  if(!process.env.DB){
    process.env.DB = 'localhost:27017/facepageapp';
  }
  if(!process.env.PORT){
    process.env.PORT = 3000;
  }
}

// Initializing our express app
const app = express();

// Setting out app rendering engine to use Handlebars.
app.engine('.hbs', handlebars({extname: '.hbs'}));

// When express renders a page, it looks in the server/views directory. 
app.set('views', 'server/views');

// And finally, setting the engine to understand the .hbs extension is to be interpretted by our view engine.
app.set('view engine', '.hbs');

// here we are telling the express web server to set the static resource folder to 'public'. This is good practice to do so we know where we can put files that will not change. This is where the pictures, CSS, svgs, fonts and more live. 
app.use(express.static('public'));

// middleware package that allows us to read the body in request objects.
app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// connection string. 
mongoose.connect(`mongodb://${process.env.DB}`);

//When you make these requests your state will change.
//This means redux needs to know about those changes. 
//In order for redux to notified, that their user state has changed, 
//we must dispatch an action to propigate the new user state object to all of the children components
//so that the cildren components wil re-render
Routes(app);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`)
});