const express = require('express');
const con = require('../database');
const router = express.Router();


router.post('/cardModule',(req,res)=>{
     con.query("Create table if not exist userCard = ?")
})