const mysql = require("mysql2");

//create connection
const db=mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'shopay',
  port:'3306'
})

//connect
db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("database connected successfully!!!!!");
  }
});

module.exports = db;
