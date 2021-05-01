const mysql      = require('mysql');
const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : process.env.MYSQL_PASSWORD,
  database : 'car',
  connectionLimit : 10,
  waitForConnections : true,
  debug : true,
});

module.exports = connection;