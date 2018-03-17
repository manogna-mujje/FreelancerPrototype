var mysql = require('mysql');

function getConnection() {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'freelancer',
        port	 : 3306
    });
    return connection;
}


function fetchData(callback, sqlQuery, helper){
	console.log("\nSQL Query::"+sqlQuery);
	var connection=getConnection();
	connection.query(sqlQuery, helper, function(err, rows, fields) {
		if(err){
			console.log("ERROR: " + err.message);
		}
		else {
			console.log("DB Results:"+rows);
        }
        callback(err, rows);
	});
	console.log("\nConnection closed..");
	connection.end();
}	


function fetch(callback, sql){
	var connection=getConnection();
	connection.query(sql, function (err, result) {
	if (err) throw err;
	callback(err, result);
	console.log("Result: " + result);
	});
	connection.end();
}

exports.fetch = fetch;
exports.fetchData=fetchData;
