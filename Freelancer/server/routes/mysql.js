var mysql = require('mysql');
var flag;
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'freelancer',
    port	 : 3306
});

var connected;

connection.connect(function(err) {
    if (err) {
        connected = false;
        throw err;
    } else {
        console.log("Connected!");
        connected = true;
    }
});

function insert(email, username, password){
    if (connected){
        //Insert a record in the "USERS" table:
        var sql = "INSERT INTO USERS SET ?";
       connection.query(sql, {EMAIL: email, USERNAME:username, USERPWD:password}, function(err, result) { 
            if (err) throw err;
            console.log("1 record inserted");
            flag = true;
        });
    }
    console.log(flag);
}

// function insert(email, username, password) {
//         var check = false;
//         connection.connect(function(err){
//         if (err) throw err;
//         console.log("Connected!");
//         var searchQuery = "SELECT USERNAME FROM USERS WHERE USERNAME = " + username;
//         connection.query(searchQuery, function(err, result) { 
//             if (err) {
//                 var insertQuery = "INSERT INTO USERS SET ?";
//                 connection.query(insertQuery, {EMAIL: email, USERNAME:username, USERPWD:password}, function(err, result) { 
//                     if (err) throw err;
//                         console.log("Record already exists");
//                         check = true;
//                     });
//             } 
//           });
//         })
//         return check;
// }


// function fetchData(callback,sqlQuery){
	
// 	console.log("\nSQL Query::"+sqlQuery);
	
// 	var connection=getConnection();
	
// 	connection.query(sqlQuery, function(err, rows, fields) {
// 		if(err){
// 			console.log("ERROR: " + err.message);
// 		}
// 		else 
// 		{	
// 			console.log("DB Results:"+rows);
// 			callback(err, rows);
// 		}
// 	});
// 	console.log("\nConnection closed..");
// 	connection.end();
// }	

// exports.fetchData=fetchData;

exports.insert=insert;