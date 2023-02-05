const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
// const User = require('./Model/Users');


const jwtKey = 'e-com';

require('dotenv').config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

/* User Routes */
const user_route = require('./Routes/userRoute')
app.use(user_route)


const udp_route = require('./Routes/UDPRoute');
app.use(udp_route);


// file not found
// const tax_route = require('./Routes/taxRoute');
// app.use(tax_route);


const shipAdd_route = require('./Routes/Shiping_Route/addressRoute');
app.use(shipAdd_route);
/* User Routes */

/* Error Route */

/* Error Route */

const middleware = (req, res, next) => {
  console.log(`Hello my Middleware`);
  next();
};

app.get('/', (req, res) => {
  res.send(`Hello world from the server app`);
});

app.get('/about', middleware, (req, res) => {
  console.log(`Hello my About`);
  res.send(`Hello About world from the server`);
});

app.get('/contact', (req, res) => {
  res.send(`Hello Contact world from the server`);
});

app.get('/signin', (req, res) => {
  res.send(`Hello Login world from the server`);
});

app.get('/signup', (req, res) => {
  res.send(`Hello Registration world from the server`);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  );
});
