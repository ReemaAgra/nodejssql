///////===================================Lesson 4========================================


// var sqlite3 = require('sqlite3').verbose();


// // Step 1: Connect to the database

// var db = new sqlite3.Database('mydatabase.db', (err) => {

//   if (err) {

//     console.error(err.message);

//   } else {

//     console.log('Connected to the SQLite database! 🎉');

//   }

// });


// // Step 2: Create a "courses" table and ensure it's completed before inserting records

// function createCoursesTable(callback) {

//   db.run(`CREATE TABLE IF NOT EXISTS courses (

//       id INTEGER PRIMARY KEY AUTOINCREMENT,  

//       name TEXT NOT NULL,                    

//       duration INTEGER                      

//     )`, (err) => {

//     if (err) {

//       console.error("Error creating the courses table:", err.message);

//     } else {

//       console.log("Courses table created successfully! 🏫");

//       callback(); // Call the next step (inserting data) after table creation is done

//     }

//   });

// }


// // Step 3: Insert records into the "courses" table

// function insertCourses() {

//   db.run(`INSERT INTO courses (name, duration) VALUES

//       ('JavaScript Basics', 20),

//       ('Python for Beginners', 15),

//       ('Web Development', 40)`, (err) => {

//     if (err) {

//       console.error("Error inserting into the courses table:", err.message);

//     } else {

//       console.log("Inserted 3 courses into the courses table! 📝");

//     }

//     closeDatabase(); // Close the database connection after inserting data

//   });

// }


// // Step 4: Alter the "courses" table (optional)

// function alterCoursesTable() {

//   db.run(`ALTER TABLE courses ADD COLUMN teacher TEXT`, (err) => {

//     if (err) {

//       console.error("Error altering the courses table:", err.message);

//     } else {

//       console.log("Added the 'teacher' column to the courses table!");

//     }

//   });

// }


// // Step 5: Drop the "courses" table (optional)

// function dropCoursesTable() {

//   db.run(`DROP TABLE IF EXISTS courses`, (err) => {

//     if (err) {

//       console.error("Error dropping the courses table:", err.message);

//     } else {

//       console.log("Courses table dropped successfully!");

//     }

//   });

// }


// // Step 6: Close the database connection

// function closeDatabase() {

//   db.close((err) => {

//     if (err) {

//       console.error(err.message);

//     } else {

//       console.log('Closed the database connection! ✅');

//     }

//   });

// }


// // Execution: Create the table, then insert records

// createCoursesTable(insertCourses);  // Pass insertCourses as a callback to ensure it runs after table creation

