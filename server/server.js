const express = require('express')
const port = 3001
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'erp0',
    port: 3306,
    // waitForConnections: true,
    // connectionLimit: 10,
    // queueLimit: 0
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//check with dummy values 
//const adminCredentials = {
    //username: 'admin',
    //password: 'password'
 /// };


////////////////////////
module.exports = pool;

// Include routes after exporting the pool
 app.use(require('./testRoutes'));
 app.use(require('./analatics'));













///check weather username and password correct///////////////////////////////////////////////////////////////////


  app.post('/adminlogin', (req, res) => {
  const { username, password } = req.body;

  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to database:', err);
      res.status(500).json({ success: false, message: 'Database error' });
      return;
    }

    // Perform the query to fetch admin credentials from the database
    connection.query('SELECT * FROM admin_table WHERE USER_ID = ?', [username], (error, results) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error('Error querying database:', error);
        res.status(500).json({ success: false, message: 'Database error' });
        return;
      }

      // Check if user exists and credentials are correct
      if (results.length > 0 && results[0].PASSWORD_ID === password) {
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    });
  });
});

//////////////////////////////////seller login //////////////////////////////////////////////////////////////////////////////////////


///check weather seller  username and password correct///////////////////////////////////////////////////////////////////


app.post('/sellerlogin', (req, res) => {
  const { username, password } = req.body;

  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to database:', err);
      res.status(500).json({ success: false, message: 'Database error' });
      return;
    }

    // Perform the query to fetch admin credentials from the database
    connection.query('SELECT * FROM seller_table WHERE SUSER_ID = ?', [username], (error, results) => {
      connection.release(); // Release the connection back to the pool

      if (error) {
        console.error('Error querying database:', error);
        res.status(500).json({ success: false, message: 'Database error' });
        return;
      }

      // Check if user exists and credentials are correct
      if (results.length > 0 && results[0].SPASSWORD_ID === password) {
        res.json({ success: true });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    });
  });
});




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//select all is   ctrl+shift+L
//testing the db connection
/*
app.post('/testpasan', (req, res) => {
  const {
      NAME,
      ID,
  
  } = req.body;


  //VALUES (?, ?, ?, ?, ?, ?, ?,?)`; this will prevent sql injection attaks 
  const INSERT_QUERY = `INSERT INTO test (NAME, ID) VALUES (?, ?)`;


   //varibale that holds the user inputs from the profileupdates 

  const profileUpdateValues = [NAME, ID];
  pool.getConnection((err, connection) => {
      if (err) {
          console.error('Error getting MySQL connection:', err);
          res.status(500).send('Error getting MySQL connection');
          return;
      }

      connection.query(INSERT_QUERY,profileUpdateValues , (err, result) => {
          connection.release(); // Release the connection
          if (err) {
              console.error('Error inserting data:', err);
              res.status(500).send('Error inserting data');
          } else {
              console.log('Data inserted successfully');
              res.status(200).send('Data inserted successfully');
          }
      });
  });
});

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ADD NEW ITEM TO THE DATA BASE pos------------> product_table

app.post('/dashboard/upload', (req, res) => {


    
    const {
        PRODUCT_CODE,
        PRODUCT_NAME,
        PRODUCT_DESCRIPTION,
        PRODUCT_CATEGORY,
        PRODUCT_EXP_DATE,
        SELLING_PRICE,
        PRODUCT_WEIGHT,
        PRODUCT_IMAGE,
        QUANTITY
    } = req.body;


    const INSERT_QUERY = `INSERT INTO product_table (PRODUCT_CODE, PRODUCT_NAME, PRODUCT_DESCRIPTION, PRODUCT_CATEGORY, PRODUCT_EXP_DATE, SELLING_PRICE, PRODUCT_WEIGHT,PRODUCT_IMAGE,QUANTITY
        ) VALUES (?, ?, ?, ?, ?, ?, ?,?,?)`;
  
    

// additemubmitValues = inputs from the user
    const addItemSubmitValues = [PRODUCT_CODE, PRODUCT_NAME, PRODUCT_DESCRIPTION, PRODUCT_CATEGORY, PRODUCT_EXP_DATE, SELLING_PRICE, PRODUCT_WEIGHT,PRODUCT_IMAGE,QUANTITY
    ];
    
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting MySQL connection:', err);
            res.status(500).send('Error getting MySQL connection');
            return;
        }
                 
        connection.query(INSERT_QUERY, addItemSubmitValues, (err, result) => {
            connection.release(); // Release the connection
            if (err) {
                console.error('Error inserting data:', err);
                res.status(500).json({ error: 'Error inserting data' });
            } else {
                console.log('Data inserted successfully');
                console.log(result);
                console.log(addItemSubmitValues);
                res.status(200).json({ message: 'Data inserted successfully' });
            }
        });
    });
});





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//get all values to the table edit delete tables /////////////////////////////////////////////////////////////////////////////

////get all items /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
app.get("/all-Items", async (req, res) => {
  try {
    // Acquire a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting MySQL connection:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      // Execute the SQL query
      connection.query('SELECT * FROM product_table', (queryError, rows) => {
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
  
 
/////////////////////////////delete item using PRODUCT_CODE /////////////










/*delete eka 264 to  344



app.delete("/Item/:PRODUCT_CODE", async (req, res) => {
  try {
    const PRODUCT_CODE = req.params.PRODUCT_CODE;

    // Acquire a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting MySQL connection:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      // Begin transaction
      connection.beginTransaction(function(err) {
        if (err) {
          console.error('Error beginning transaction:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
        
        // Delete related records from supplier_table
        connection.query('DELETE FROM supplier_table WHERE PRODUCT_CODE = ?', [PRODUCT_CODE], function(queryError, result) {
          if (queryError) {
            return connection.rollback(function() {
              console.error('Error deleting from supplier_table:', queryError.message);
              res.status(500).send('Internal Server Error');
            });
          }

          // Delete related records from pos_table
          connection.query('DELETE FROM pos_table WHERE PRODUCT_CODE = ?', [PRODUCT_CODE], function(queryError, result) {
            if (queryError) {
              return connection.rollback(function() {
                console.error('Error deleting from pos_table:', queryError.message);
                res.status(500).send('Internal Server Error');
              });
            }

            // Delete related records from bill_table
            connection.query('DELETE FROM bill_table WHERE INV_NUM IN (SELECT INV_NUM FROM pos_table WHERE PRODUCT_CODE = ?)', [PRODUCT_CODE], function(queryError, result) {
              if (queryError) {
                return connection.rollback(function() {
                  console.error('Error deleting from bill_table:', queryError.message);
                  res.status(500).send('Internal Server Error');
                });
              }

              // Execute the SQL query to delete item from erp.product_table
              connection.query('DELETE FROM product_table WHERE PRODUCT_CODE = ?', [PRODUCT_CODE], function(queryError, result) {
                if (queryError) {
                  return connection.rollback(function() {
                    console.error('Error executing SQL query:', queryError.message);
                    res.status(500).send('Internal Server Error');
                  });
                }

                // Commit the transaction
                connection.commit(function(err) {
                  if (err) {
                    return connection.rollback(function() {
                      console.error('Error committing transaction:', err);
                      res.status(500).send('Internal Server Error');
                    });
                  }
                  res.status(200).send('Deleted successfully');
                });
              });
            });
          });
        });
      });
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});*/























app.delete("/Item/:PRODUCT_CODE", async (req, res) => {
  try {
    const PRODUCT_CODE = req.params.PRODUCT_CODE;

    // Acquire a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting MySQL connection:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      // Begin transaction
      connection.beginTransaction(function(err) {
        if (err) {
          console.error('Error beginning transaction:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
        
        // Delete related records from pos_newtable
        connection.query('DELETE FROM pos_newtable WHERE PRODUCT_CODE = ?', [PRODUCT_CODE], function(queryError, result) {
          if (queryError) {
            return connection.rollback(function() {
              console.error('Error deleting from pos_newtable:', queryError.message);
              res.status(500).send('Internal Server Error');
            });
          }

          // Execute the SQL query to delete item from erp.product_table
          connection.query('DELETE FROM product_table WHERE PRODUCT_CODE = ?', [PRODUCT_CODE], function(queryError, result) {
            if (queryError) {
              return connection.rollback(function() {
                console.error('Error executing SQL query:', queryError.message);
                res.status(500).send('Internal Server Error');
              });
            }

            // Commit the transaction
            connection.commit(function(err) {
              if (err) {
                return connection.rollback(function() {
                  console.error('Error committing transaction:', err);
                  res.status(500).send('Internal Server Error');
                });
              }
              res.status(200).send('Deleted successfully');
            });
          });
        });
      });
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});




/////////////////////////////////////////////////update only the nessary parts of the database//////////////////////////////
///pasan


app.patch("/Item/:PRODUCT_CODE", async (req, res) => {
  const PRODUCT_CODE = req.params.PRODUCT_CODE;
  const updateitemdata = req.body;

  console.log("Received PATCH request for PRODUCT_CODE:", PRODUCT_CODE);
  console.log("Update data:", updateitemdata);

  const UPDATE_QUERY = `UPDATE product_table SET PRODUCT_NAME=?, PRODUCT_DESCRIPTION=?, PRODUCT_CATEGORY=?, PRODUCT_EXP_DATE=?, SELLING_PRICE=?, PRODUCT_WEIGHT=?, PRODUCT_IMAGE=?, QUANTITY=? WHERE PRODUCT_CODE=?`;

  const updateItemSubmitValues = [
      updateitemdata.PRODUCT_NAME,
      updateitemdata.PRODUCT_DESCRIPTION,
      updateitemdata.PRODUCT_CATEGORY,
      updateitemdata.PRODUCT_EXP_DATE,
      updateitemdata.SELLING_PRICE,
      updateitemdata.PRODUCT_WEIGHT,
      updateitemdata.PRODUCT_IMAGE,
      updateitemdata.QUANTITY,
      PRODUCT_CODE
  ];

  console.log("UPDATE_QUERY:", UPDATE_QUERY);
  console.log("Update values:", updateItemSubmitValues);

  pool.getConnection((err, connection) => {
      if (err) {
          console.error('Error getting MySQL connection:', err);
          res.status(500).send('Error getting MySQL connection');
          return;
      }

      connection.query(UPDATE_QUERY, updateItemSubmitValues, (err, result) => {
          connection.release(); // Release the connection
          if (err) {
              console.error('Error updating data:', err);
              res.status(500).json({ error: 'Error updating data' });
          } else {
              console.log('Data updated successfully');
              console.log('Rows affected:', result.affectedRows);
              res.status(200).json({ message: 'Data updated successfully' });
          }
      });
  });
});




//////////////////////////////////////get details by ID ///////////////////////////////////////
///pasan

app.get("/Item/:PRODUCT_CODE", async (req, res) => {
  const PRODUCT_CODE = req.params.PRODUCT_CODE;

  // Query your database to retrieve the item data based on PRODUCT_CODE
  const query = `SELECT * FROM product_table WHERE PRODUCT_CODE = ?`;

  // Execute the query
  pool.query(query, [PRODUCT_CODE], (err, result) => {
      if (err) {
          console.error('Error fetching item data:', err);
          res.status(500).json({ error: 'Error fetching item data' });
          return;
      }

      // Check if the item with the given PRODUCT_CODE exists
      if (result.length === 0) {
          res.status(404).json({ error: 'Item not found' });
          return;
      }

      // Item found, return it as JSON response
      const itemData = result[0]; // Assuming you're expecting only one item
      res.status(200).json(itemData);
  });
});






/////          Admin manage  Admin manage Admin manageback end for the Admin manage  Admin manage Admin manage Admin manage Admin manage




////////////////////////////////////////////////////////////////    Create a  Admin 



app.post('/dashboard/Adminupload', (req, res) => {
  const { USER_ID, PASSWORD_ID } = req.body;

  const INSERT_QUERY = `INSERT INTO admin_table (USER_ID, PASSWORD_ID) VALUES (?, ?)`;

  const insertValues = [USER_ID, PASSWORD_ID];

  pool.getConnection((err, connection) => {
      if (err) {
          console.error('Error getting MySQL connection:', err);
          res.status(500).send('Error getting MySQL connection');
          return;
      }

      connection.query(INSERT_QUERY, insertValues, (err, result) => {
          connection.release(); // Release the connection
          if (err) {
              console.error('Error inserting data:', err);
              res.status(500).json({ error: 'Error inserting data' });
          } else {
              console.log('Data inserted successfully');
              console.log(result);
              res.status(200).json({ message: 'Data inserted successfully' });
          }
      });
  });
});






//////////////////////////////////////////////////////get All-admins from the admin_table




app.get("/all-Admins", async (req, res) => {
  try {
    // Acquire a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting MySQL connection:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      // Execute the SQL query
      connection.query('SELECT * FROM admin_table', (queryError, rows) => {
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
  






///////////////////////////////////////// Delete Admin by  USER_ID





app.delete("/Admin/:USER_ID", async (req, res) => {
  try {
    const USER_ID = req.params.USER_ID;

    // Acquire a connection from the pool
    pool.getConnection((err, connection) => {
      if (err) {
        console.error('Error getting MySQL connection:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      // Begin transaction
      connection.beginTransaction(function(err) {
        if (err) {
          console.error('Error beginning transaction:', err);
          res.status(500).send('Internal Server Error');
          return;
        }

        // Delete related records from supplier_table
        connection.query('DELETE FROM admin_table WHERE USER_ID = ?', [USER_ID], function(queryError, result) {
          if (queryError) {
            return connection.rollback(function() {
              console.error('Error deleting from supplier_table:', queryError.message);
              res.status(500).send('Internal Server Error');
            });
          }

          // Commit the transaction
          connection.commit(function(err) {
            if (err) {
              return connection.rollback(function() {
                console.error('Error committing transaction:', err);
                res.status(500).send('Internal Server Error');
              });
            }
            res.status(200).send('Deleted successfully');
          });
        });
      });
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});






///////////////get details from the USER_ID for Admin manage 



app.get("/Admin/:USER_ID", async (req, res) => {
  const USER_ID = req.params.USER_ID;

  // Query your database to retrieve the item data based on user ID
  const query = `SELECT * FROM admin_table WHERE USER_ID = ?`;

  // Execute the query
  pool.query(query, [USER_ID], (err, result) => {
      if (err) {
          console.error('Error fetching item data:', err);
          res.status(500).json({ error: 'Error fetching item data' });
          return;
      }

      // Check if the item with the given user ID exists
      if (result.length === 0) {
          res.status(404).json({ error: 'Item not found' });
          return;
      }

      // Item found, return it as JSON response
      const itemData = result[0]; // Assuming you're expecting only one item
      res.status(200).json(itemData);
  });
});



//////////////////patch for the admin edit eke api edit krna ewa withatk edit wenna meka gannaww 



app.patch('/Admin/:USER_ID', (req, res) => {
  const USER_ID = req.params.USER_ID;
  const { PASSWORD_ID } = req.body;

  console.log("Received PATCH request for USER_ID:", USER_ID);
  console.log("New PASSWORD_ID:", PASSWORD_ID);

  const UPDATE_QUERY = `UPDATE admin_table SET PASSWORD_ID=? WHERE USER_ID=?`;

  const updateAdminSubmitValues = [
    PASSWORD_ID,
    USER_ID
  ];

  console.log("UPDATE_QUERY:", UPDATE_QUERY);
  console.log("Update values:", updateAdminSubmitValues);

  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      res.status(500).send('Error getting MySQL connection');
      return;
    }

    connection.query(UPDATE_QUERY, updateAdminSubmitValues, (err, result) => {
      connection.release(); // Release the connection
      if (err) {
        console.error('Error updating admin data:', err);
        res.status(500).json({ error: 'Error updating admin data' });
      } else {
        console.log('Admin data updated successfully');
        console.log('Rows affected:', result.affectedRows);
        res.status(200).json({ message: 'Admin data updated successfully' });
      }
    });
  });
});





























app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
