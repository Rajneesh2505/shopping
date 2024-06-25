const mysql = require('mysql');

const con= mysql.createConnection({
    host: 'bynyujgpehtlacw8kmfj-mysql.services.clever-cloud.com',
    user:'uip6oubrynhfrpjl',
    port:'3306',
    database:'bynyujgpehtlacw8kmfj',
    password:"TOND1moXbGfc81ymyvYU"
});

con.connect((err,res) =>{
    if(err){
        console.log("Connection error");
    }else{
        console.log("Connect the database");
    }
});

// con.query("CREATE DATABASE mydb",(err,res) =>{
//     if(err){
//         console.log("Database is not created");
//     }else{
//         console.log("Create DataBase");
//     }
// });

// con.query("Create table orders(orderId int not null, primary key(orderId),userId int ,foreign key(userId) references user(userId));"
// , (err, res) => {
//     if(err){
//         console.log("Table is not created");
//     } else {
//         console.log("Created table");
//     }
// });

// con.query("create table user (userId int primary key auto_increment,name varchar(50) not null,password varchar(200) not null);",(err,res)=>{
//     if(err){
//                 console.log("Table is not created");
//             } else {
//                 console.log("Created table");
//             }
//         }
// )
module.exports = con;      
