const express = require('express');
const router = express.Router();
const con = require('../database');
const jwt = require('jsonwebtoken');
const {hashpassword} = require('../uitility');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

let userid;

router.post("/signup",(req,res)=>{
     hashpassword(req.body.password).then(hashPass=>{
       let data={name:req.body.name,password: hashPass}
      con.query("INSERT INTO user SET ?",data,(err,result,fields)=>{
       if(err){
           console.log(err)
       }else{
           res.status(200).send("user created succesfully")
       }
      })
    }).catch(err=>res.status(400).send(err))
       
})

let authorize=crypto.randomBytes(64).toString("hex");
router.post("/login", (req, res) => {
    const { name, password } = req.body;

    con.query("SELECT * FROM user WHERE name = ?", name, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Internal server error");
        } else {
            if (result.length) {
                bcrypt.compare(password, result[0].password).then((data) => {
                    if (data) {
                        const userId = result[0].id; 
                        userid = userId;
                        const token = jwt.sign({ userId }, authorize);
                        res.status(200).send([token,userId]);
                    } else {
                        res.status(400).send("Password is incorrect");
                        
                    }
                });
            } else {
                res.status(400).send("User not found");
            }
        }
    });
});



router. post('/orders',(req, res) => {

    const{orderId,UserId} = req.body; 
  const query =`Insert into orders (orderId , userId) values (${orderId},${UserId})`;
   con.query(query, (err , result)=>{
    if(err){
        res.status(500).send('Error placing order');
    }else{
        res.status(200).send('Order placed successfully');
    }
})
})
// console.log(userid)

router.get('/orders', (req, res) => {
    // console.log(userid);
    con.query("select orderId from orders where userId =?",userid, (err, result) => {
        if (err) {
            console.error(err);
            res.status(404).send('Error fetching orders table data');
        } else {
            res.status(200).json(result); 
        }
    });
});


//Delete order query 



// router.delete('/orders',(req, res) => {
//     con.query("delete from orders where userId =?",userid,(err,result)=>{
//         if(err){
//             console.error(err);
//             res.status(404).send('Error deleting order table data');
//         } else {
//             res.status(200).json(result);
//         }
//     } )
// })

module.exports = router;