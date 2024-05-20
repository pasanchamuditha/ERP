const express = require('express');
const router = express.Router();
const cors = require('cors');

const pool = require('./server'); // Assuming you have a proper MySQL connection pool module

router.use(cors());

const util = require('util');

// Promisify the pool.query method
pool.query = util.promisify(pool.query);


//router.get('/
//router.post('/
//router.post('/api2/getItemDetails' , async (req, res) => {
// console.log('Get Item Details request received:', req.body);

router.post('/pasan', function (req, res) {
    res.send('hello world')
  })
  






//this is the end part 
module.exports = router;