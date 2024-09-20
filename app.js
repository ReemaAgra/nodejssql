// Step 1: Load the sqlite3 module so we can use it to work with the database
var sqlite3 = require('sqlite3').verbose();
// Step 2: Connect to the database (or create it if it doesn’t exist)
var db = new sqlite3.Database('mydatabase.db', (err) => {
    if (err) {
      console.error(err.message); // If there is an error, it will tell us
    } else {
      console.log('Connected to the SQLite database! 🎉');
    }
  });
  // Step 3: Create a "students" table if it doesn’t exist already
db.run(`CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT NOT NULL,                    
    age INTEGER                           
  )`, (err) => {
    if (err) {
      console.error(err.message); // If there is an error creating the table, it will tell us
    } else {
      console.log('Table created successfully! 🏫');
    }
  });
  // step 4: insert students into the table
  db.run(`INSERT INTO students(name,age) VALUES 
    ("REEMA",40),
    ("SEEMA",35)`,(err)=>{
        if (err){
            console.error(err.message);
        }else{
            console.log("inserted records properly")
        }
    });
    
  // Step 5: Close the database connection after all operations
db.close((err) => {
    if (err) {
      console.error(err.message); // If there is an error closing the database, it will tell us
    } else {
      console.log('Closed the database connection! ✅');
    }
  });
// let add=(n1,n2)=>{
//     console.log(n1+n2)

// }
// add(3,5)