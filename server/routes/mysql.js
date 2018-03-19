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
	console.log(sql);
	connection.query(sql, function (err, result) {
	if (err) throw err;
	callback(err, result);
	console.log("Result: " + result);
	});
	connection.end();
}

// ------------------------------------------------ Connection Pooling ----------------------------------------------- //
// var pool      =    mysql.createPool({
// 	connectionLimit : 100, //important
// 	host     : 'localhost',
// 	user     : 'root',
// 	password : 'password',
// 	database : 'freelancer',
// 	debug    :  false
// });



// function fetchData(callback, sqlQuery, helper){
// 	console.log("\nSQL Query:"+sqlQuery);
// 	pool.getConnection(function(err, connection){
// 		connection.query(sqlQuery, helper, function(err, rows, fields) {
// 			if(err){
// 				console.log("ERROR: " + err.message);
// 			}
// 			else {
// 				console.log("DB Results:"+rows);
// 			}
// 			callback(err, rows);
// 		});
// 		console.log("\nConnection closed..");
// 		// connection.end();
// 		connection.release();
// 	});
// }	


// function fetch(callback, sql){
// 	pool.getConnection(function(err, connection){
// 		connection.query(sql, function (err, result) {
// 		if (err) throw err;
// 		callback(err, result);
// 		console.log("Result: " + result);
// 		});
// 		connection.release();
// 	})
// }

// -------------------------------------------------------------------------------------------------------- //

exports.fetch = fetch;
exports.fetchData=fetchData;
