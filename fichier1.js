var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "route",
  password: "",
  database: "test"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM employe", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });