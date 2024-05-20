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

//router.post('/testpasan', function (req, res) {
//res.send('hello worlddddddddddddddd')
//})
  

router.post('/newtest', (req, res) => {

    //body values 
    const {SUSER_ID, SPASSWORD_ID} = req.body;


    //VALUES (?, ?)`; this will prevent sql injection attaks 
    const INSERT_QUERY = `INSERT INTO seller_table (SUSER_ID, SPASSWORD_ID) VALUES (?, ?)`;


     //varibale that holds the user inputs from the profileupdates
    const inputValues = [SUSER_ID, SPASSWORD_ID];

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting MySQL connection:', err);
            res.status(500).send('Error getting MySQL connection');
            return;
        }
//INSERT_QUERY kiyanne sql query eka danna ona , profileUpdateValues danna ona values tika 
        connection.query(INSERT_QUERY,inputValues , (err, result) => {
            connection.release(); // Release the connection
            if (err) {
                console.error('Error inserting data:', err);
                res.status(500).json({ error: 'Error inserting data' });
            } else {
                console.log('Data inserted successfully');
                res.status(200).json({ message: 'Data inserted successfully' });
            }
        });
    });
});


//get 



router.get('/newtest', (req, res) => {

    const SELECT_QUERY = `SELECT * FROM seller_table`;

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting MySQL connection:', err);
            res.status(500).send('Error getting MySQL connection');
            return;
        }

        connection.query(SELECT_QUERY, (err, results) => {
            connection.release(); // Release the connection
            if (err) {
                console.error('Error fetching data:', err);
                res.status(500).json({ error: 'Error fetching data' });
            } else {
                console.log('Data fetched successfully');
                res.status(200).json(results);
            }
        });
    });
});

////////////////////////////////////////////supplier_table input 


router.post('/suppliertableinput', (req, res) => {

    //body values 
    const {SUPPLIER_ID,SUPPLIER_NAME,PRODUCT_CODE} = req.body;


    //VALUES (?, ?)`; this will prevent sql injection attaks 
    const INSERT_QUERY = `INSERT INTO supplier_table (SUPPLIER_ID, SUPPLIER_NAME,PRODUCT_CODE) VALUES (?, ?, ?)`;


     //varibale that holds the user inputs from the profileupdates
    const inputValues = [SUPPLIER_ID,SUPPLIER_NAME,PRODUCT_CODE];

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting MySQL connection:', err);
            res.status(500).send('Error getting MySQL connection');
            return;
        }
//INSERT_QUERY kiyanne sql query eka danna ona , profileUpdateValues danna ona values tika 
        connection.query(INSERT_QUERY,inputValues , (err, result) => {
            connection.release(); // Release the connection
            if (err) {
                console.error('Error inserting data:', err);
                res.status(500).json({ error: 'Error inserting data' });
            } else {
                console.log('Data inserted successfully');
                res.status(200).json({ message: 'Data inserted successfully' });
            }
        });
    });
});

///////////////////////////////////post method for pos table pos pos pos pos 

/*router.post('/submit-order', (req, res) => {
    const { total, items, invBill } = req.body;

    console.log("Received request to submit order:");
    console.log("Total:", total);
    console.log("Items:", items);
    console.log("InvBill:", invBill);

    // Check if invBill already exists in the database
    const CHECK_EXISTENCE_QUERY = `SELECT COUNT(*) AS count FROM posoder_table WHERE inv_bill = ?`;

    pool.query(CHECK_EXISTENCE_QUERY, [invBill], (err, results) => {
        if (err) {
            console.error('Error checking invBill existence:', err);
            res.status(500).json({ error: 'Error checking invBill existence' });
            return;
        }

        const count = results[0].count;
        if (count > 0) {
            console.error('invBill already exists:', invBill);
            res.status(400).json({ error: 'invBill already exists' });
            return;
        }

        // Prepare query to insert data into posoder_table
        const INSERT_QUERY = `INSERT INTO posoder_table (total, product_code, inv_bill) VALUES (?, ?, ?)`;

        // Get a connection from the pool
        pool.getConnection((err, connection) => {
            if (err) {
                console.error('Error getting MySQL connection:', err);
                res.status(500).send('Error getting MySQL connection');
                return;
            }

            // Begin transaction
            connection.beginTransaction(err => {
                if (err) {
                    console.error('Error beginning transaction:', err);
                    res.status(500).json({ error: 'Error beginning transaction' });
                    connection.release(); // Release the connection
                    return;
                }

                // Execute insert query for each item
                const insertPromises = items.map(item => {
                    return new Promise((resolve, reject) => {
                        console.log("Inserting item:", item);
                        connection.query(INSERT_QUERY, [total, item, invBill], (err, result) => {
                            if (err) {
                                console.error('Error inserting data:', err);
                                reject(err);
                            } else {
                                console.log("Inserted successfully:", result);
                                resolve(result);
                            }
                        });
                    });
                });

                // Execute all insert queries concurrently
                Promise.all(insertPromises)
                    .then(() => {
                        // Commit transaction if all insert queries were successful
                        connection.commit(err => {
                            if (err) {
                                console.error('Error committing transaction:', err);
                                res.status(500).json({ error: 'Error committing transaction' });
                            } else {
                                console.log('Transaction committed successfully.');
                                res.status(200).json({ message: 'Data inserted successfully' });
                            }
                            connection.release(); // Release the connection
                        });
                    })
                    .catch(error => {
                        console.error('Error inserting data:', error);
                        // Rollback transaction in case of any error
                        connection.rollback(() => {
                            console.error('Transaction rolled back.');
                            res.status(500).json({ error: 'Error inserting data' });
                            connection.release(); // Release the connection
                        });
                    });
            });
        });
    });
});

*/




// analitics/Productsupplierjoin/ get method
router.get('/productjoinsupplier', (req, res) => {
  //this will right outer joun supplie table and give out put only these attibutes and create a new coloum table  to check expiredate
    const SELECT_QUERY = `SELECT 
    product_table.PRODUCT_CODE,
    product_table.PRODUCT_NAME,
    supplier_table.SUPPLIER_ID,
    supplier_table.SUPPLIER_NAME,
    product_table.PRODUCT_EXP_DATE,
    CASE 
        WHEN product_table.PRODUCT_EXP_DATE <= CURRENT_DATE THEN 'Expired'
        ELSE 'Not Expired'
    END AS Expiry_Status
    FROM 
    product_table
    RIGHT OUTER JOIN 
    supplier_table 
    ON 
    product_table.PRODUCT_CODE = supplier_table.PRODUCT_CODE;`;

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting MySQL connection:', err);
            res.status(500).send('Error getting MySQL connection');
            return;
        }

        connection.query(SELECT_QUERY, (err, results) => {
            connection.release(); // Release the connection
            if (err) {
                console.error('Error fetching data:', err);
                res.status(500).json({ error: 'Error fetching data' });
            } else {
                console.log('Data fetched successfully');
                res.status(200).json(results);
            }
        });
    });
});



//product_table has at least one corresponding supplier in the supplier_table 
//and ckeck the product availablility  




router.get('/Avalable-items', (req, res) => {


    const SELECT_QUERY =

    `SELECT 
    product_table.PRODUCT_CODE,
    product_table.PRODUCT_NAME,
    CASE WHEN product_table.QUANTITY > 0 THEN 'Available' ELSE 'Not Available' END AS Item_Availability,
    CASE WHEN supplier_table.PRODUCT_CODE IS NOT NULL THEN 'Available' ELSE 'Not Available' END AS Supplier_Availability
    FROM 
    product_table
    LEFT JOIN 
    supplier_table
    ON 
    product_table.PRODUCT_CODE = supplier_table.PRODUCT_CODE;`;

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting MySQL connection:', err);
            res.status(500).send('Error getting MySQL connection');
            return;
        }

        connection.query(SELECT_QUERY, (err, results) => {
            connection.release(); // Release the connection
            if (err) {
                console.error('Error fetching data:', err);
                res.status(500).json({ error: 'Error fetching data' });
            } else {
                console.log('Data fetched successfully');
                res.status(200).json(results);
            }
        });
    });
});



// only get the items that are quntity greater than 1

router.get("/allAvalable-Items", async (req, res) => {
    try {
      // Acquire a connection from the pool
      pool.getConnection((err, connection) => {
        if (err) {
          console.error('Error getting MySQL connection:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
  
        // Execute the SQL query
        connection.query('SELECT * FROM product_table WHERE QUANTITY > 1', (queryError, rows) => {
          connection.release(); // Release the connection back to the pool
  
          if (queryError) {
            console.error('Error executing SQL query:', queryError.message);
            res.status(500).send('Internal Server Error');
            return;
          }
  
          res.send(rows); // Send query results to client
        });
      });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).send('Internal Server Error');
    }
  });


///insert pos data to the table 

// Endpoint to handle storing bill data
router.post('/storeBillData', async (req, res) => {
    try {
      const billData = req.body;
  
      // Prepare an array to hold all insert queries
      const insertQueries = [];
      const updateQueries = [];
  
      // Iterate through billData to create an insert query for each item
      billData.forEach(item => {
        insertQueries.push(pool.query('INSERT INTO pos_newtable (CUS_ID, PRODUCT_CODE) VALUES (?, ?)', [item.CUS_ID, item.PRODUCT_CODE]));
        
        // Check if the product code exists in the product_table
        const checkProductQuery = 'SELECT * FROM product_table WHERE PRODUCT_CODE = ?';
        updateQueries.push(pool.query(checkProductQuery, [item.PRODUCT_CODE]));
      });
  
      // Execute all insert queries in parallel
      await Promise.all(insertQueries);
  
      // Execute all select queries in parallel to check product codes
      const productResults = await Promise.all(updateQueries);
  
      // Update quantity for each product if found
      productResults.forEach((result, index) => {
        if (result.length > 0) {
          const updatedQuantity = result[0].QUANTITY - 1;
          const updateQuantityQuery = 'UPDATE product_table SET QUANTITY = ? WHERE PRODUCT_CODE = ?';
          pool.query(updateQuantityQuery, [updatedQuantity, billData[index].PRODUCT_CODE]);
        }
      });
  
      console.log('Bill data stored successfully');
      res.status(200).json({ message: 'Bill data stored successfully' });
    } catch (error) {
      console.error('Error storing bill data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// this is the billing table

router.get('/Billing-items', (req, res) => {

    const SELECT_QUERY = `SELECT pos_newtable.BIL_ID, product_table.PRODUCT_NAME, product_table.SELLING_PRICE
    FROM product_table
    RIGHT OUTER JOIN pos_newtable 
    ON product_table.PRODUCT_CODE = pos_newtable.PRODUCT_CODE`;

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting MySQL connection:', err);
            res.status(500).send('Error getting MySQL connection');
            return;
        }

        connection.query(SELECT_QUERY, (err, results) => {
            connection.release(); // Release the connection
            if (err) {
                console.error('Error fetching data:', err);
                res.status(500).json({ error: 'Error fetching data' });
            } else {
                console.log('Data fetched successfully');
                res.status(200).json(results);
            }
        });
    });
});


  

//coustomer id and billig table get the individual coustommers total transaction values 
router.get('/coustomer-bill', (req, res) => {

    const SELECT_QUERY = `SELECT pos.CUS_ID, ROUND(SUM(prod.SELLING_PRICE), 3) AS TOTAL
    FROM pos_newtable AS pos
    JOIN product_table AS prod ON pos.PRODUCT_CODE = prod.PRODUCT_CODE
    GROUP BY pos.CUS_ID`;

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting MySQL connection:', err);
            res.status(500).send('Error getting MySQL connection');
            return;
        }

        connection.query(SELECT_QUERY, (err, results) => {
            connection.release(); // Release the connection
            if (err) {
                console.error('Error fetching data:', err);
                res.status(500).json({ error: 'Error fetching data' });
            } else {
                console.log('Data fetched successfully');
                res.status(200).json(results);
            }
        });
    });
});


















//this is the end part 
module.exports = router;